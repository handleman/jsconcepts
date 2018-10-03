// todo: implement stack pattern
class Stack{
    constructor(){
        this._lenght = 0
        this._values = {};
    }
    push(val){
        this._lenght++;
        this._values[length] = val;
    }
    pop(){
        if(this._lenght){
            const val = this._values[this._lenght];
            delete this.values[this._lenght];
            this._lenght--;
            return val;
        }
    }
}

export default Stack;