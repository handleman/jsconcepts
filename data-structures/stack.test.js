import Stack from './stack.js';

it('stack.js: increment stack length after adding item to it', ()=>{
	const stack = new Stack;
	stack.push(0);
	const length = stack.length();

	if(length !== 1){
		throw new Error(`stack length should be incremented by 1, but instead it is ${length}`);
	}
});

it('stack.js: return last on pop ( LIFO principles) and decrease in length ', ()=>{
	const stack = new Stack;
	stack.push(0);
	stack.push(1);
    const foo = stack.pop();

	if(foo !== 1){
		throw new Error(`last entered value should be equal \'1\' now it is: ${foo} `);
	}
	if(stack.length() !== 1){
		throw new Error(`Decreased length after popping out third element should be equal 1, now it is : ${stack.length}`);
	}
});
it('stack.js: return null value in case there is no elements inside', ()=>{
	const stack = new Stack;
	for(let i = 0; i < 100; i++){
		stack.push(i);
		stack.pop();
	}
	const length = stack.length();
	const foo = stack.pop();

	if (length !== 0){
		throw new Error(`stack should be empty and length of it equal 0, now it is: ${length}`)
	}
	if (foo !== null){
		throw new Error(`instead of 'null' there is: ${foo}`)
	}

});
