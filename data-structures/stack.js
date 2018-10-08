class Stack {
	constructor() {
		this._lenght = 0;
		this._values = {};
	}

	push(val) {
		this._lenght++;
		this._values[this._lenght] = val;
	}

	pop() {
		if (this._lenght) {
			const val = this._values[this._lenght];
			delete this.values[this._lenght];
			this._lenght--;
			return val;
		}
	}

	length() {
		return this._lenght;
	}
}

export default Stack;