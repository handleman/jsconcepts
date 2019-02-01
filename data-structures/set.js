class Set{
    constructor(arr){
        this._set = {};

        if(arr && arr.constructor === Array){
            arr.forEach(key=>{
                this._set[key] = true;
            });
        }
    }
    add(additionalSet){
        additionalSet.forEach(val=>{
           this._set[val] = true;
        });
        return this.get();
    }
    get(){
        const setAsArray = [];
        const set = this._set;
        Object.keys(set).forEach(key=>{
            setAsArray.push(key);

        });
        return setAsArray;
    }
    has(item){
        const typeErrorMesage =  Set._typeErroGenerator('has');
        if(item === undefined || item === null || isNaN(item)){
            throw TypeError(typeErrorMesage);
        }

        return !!this._set[item];
    }
    static _typeErroGenerator(methodName){
        return `${methodName} method requires proper types of its attributes`;
    }
    static union(initialSet, additionalSet){
        const typeErrorMesage =  this._typeErroGenerator('union');

        if(!initialSet || !additionalSet){
            throw TypeError(typeErrorMesage);
        }
        let source;
        let additional;
        if(initialSet.constructor === Array && additionalSet.constructor === Array){
            source = initialSet;
            additional = additionalSet;
        } else if(initialSet.constructor === Set && additionalSet.constructor === Set){
            source = initialSet.get();
            additional = additionalSet.get();
        }else{
            throw TypeError(typeErrorMesage)
        }
        const unitedSet = new Set(source);
        unitedSet.add(additional);
        return unitedSet;
    }
    static intersection (initialSet, additionalSet){
        const typeErrorMesage =  this._typeErroGenerator('intersection');
        if(!initialSet || !additionalSet){
            throw TypeError(typeErrorMesage);
        }
        let source;
        let additional;
        if(initialSet.constructor === Array && additionalSet.constructor === Array){
            source = new Set(initialSet);
            additional = additionalSet
        } else if(initialSet.constructor === Set && additionalSet.constructor === Set){
            source = initialSet;
            additional = additionalSet.get();
        }else{
            throw TypeError(typeErrorMesage)
        }

        const intersection = new Set();

        additional.forEach(val=>{
            if (source.has(val)){
                intersection.add([val])
            }
        });

        return intersection;

    }
    static difference (initialSet, negativeSet){
        const typeErrorMesage =  this._typeErroGenerator('difference');
        if(!initialSet || !negativeSet){
            throw TypeError(typeErrorMesage);
        }
        let source;
        let negative;
        if(initialSet.constructor === Array && negativeSet.constructor === Array){
            source = initialSet;
            negative = new Set(negativeSet);
        } else if(initialSet.constructor === Set && negativeSet.constructor === Set){
            source = initialSet.get();
            negative = negativeSet;
        }else{
            throw TypeError(typeErrorMesage)
        }
        const difference = new Set();

        source.forEach(val=>{
            if (!negative.has(val)){
                difference.add([val])
            }
        });

        return difference;
    }
}
export default Set;
