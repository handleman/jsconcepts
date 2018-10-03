class Queue{
    constructor(){
        this._firstIndex = 1;
        this._lastIndex = 1;
        this._values = {};
    }
    length(){
        return this._lastIndex - this._firstIndex;
    }
    push(val){
        this._values[this._lastIndex] = val;
        this._lastIndex++;
    }
    pop(){
        if (this.length()){
            const val = this._values[this._firstIndex];
            delete this._values[this._firstIndex];
            this._firstIndex++;
            return val;
        }
        return null;
    }
}
export default Queue;
