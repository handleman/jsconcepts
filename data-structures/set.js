class Set{
    constructor(arr){
        this._set = {};

        if(arr && arr.constructor === Array){
            arr.forEach(key=>{
                this._set[key] = true;
            });
        }
    }
    add(B){

    }
    get(){
        const setAsArray = [];
        const set = this._set;
        Object.keys(set).forEach(key=>{
            setAsArray.push(key);

        });
        return setAsArray;
    }
    static union(A, B){

    }
    static intersection (A, B){

    }
    static difference (A, B){

    }
}
export default Set;
