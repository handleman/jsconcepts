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
        console.log('additionalSet', additionalSet);
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
    static _typeErroGenerator(methodName){
        return `${methodName} method requires two attributes of proper types (Array or Set)`;
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
    static intersection (A, B){

    }
    static difference (A, B){

    }
}
export default Set;
