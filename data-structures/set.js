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
        if(!!item ){
            return !!this._set[item];
        }else{
            return false;
        }

    }

    static _typeError(methodName){
        throw TypeError(`${methodName} method requires proper types of its attributes`)
    }

    static _checkArgumentsType(methodName, initialSet, additionalSet){
        if(!initialSet || !additionalSet){
            this._typeError(methodName);
        }
    }

    static _argumemtsAreArrays(firstArgument, secondArgument){
        return firstArgument.constructor === Array && secondArgument.constructor === Array;
    }

    static _argumemtsAreSet(firstArgument, secondArgument){
        return firstArgument.constructor === Set && secondArgument.constructor === Set
    }

    static union(initialSet, additionalSet){
        let source;
        let additional;
        this._checkArgumentsType('union', initialSet, additionalSet);
        if(this._argumemtsAreArrays(initialSet,additionalSet)){
            source = initialSet;
            additional = additionalSet;
        } else if(this._argumemtsAreSet(initialSet, additionalSet)){
            source = initialSet.get();
            additional = additionalSet.get();
        }else{
            this._typeError('union');
        }
        const unitedSet = new Set(source);
        unitedSet.add(additional);
        return unitedSet;
    }

    static intersection (initialSet, additionalSet){
        let source;
        let additional;
        this._checkArgumentsType('intersection', initialSet, additionalSet);
        if(this._argumemtsAreArrays(initialSet,additionalSet)){
            source = new Set(initialSet);
            additional = additionalSet
        } else if(this._argumemtsAreSet(initialSet, additionalSet)){
            source = initialSet;
            additional = additionalSet.get();
        }else{
            this._typeError('intersection');
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
        let source;
        let negative;
        this._checkArgumentsType('intersection', initialSet, negativeSet);
        if(this._argumemtsAreArrays(initialSet,negativeSet)){
            source = initialSet;
            negative = new Set(negativeSet);
        } else if(this._argumemtsAreSet(initialSet, negativeSet)){
            source = initialSet.get();
            negative = negativeSet;
        }else{
            this._typeError('difference');
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
