const fruitSellers = {
	pavel:{
		friends:['olga','anton','denis','vad'],
		sellMango: false,
	},
	olga:{
		friends:['tania','denis','vad'],
		sellMango: false,
	},
	vad:{
		friends:['tania','oleg','vad'],
		sellMango: false,
	},
	anton:{
		friends:['pavel','oleg','olga'],
		sellMango: false,
	},
	denis:{
		friends:['pavel','vad','olga'],
		sellMango: false,
	},
	tania:{
		friends:['anton','denis','olga'],
		sellMango: false,
	},
	oleg:{
		friends:['anton', 'vad'],
		sellMango:true,
	}
};

export {fruitSellers}