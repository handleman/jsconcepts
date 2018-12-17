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
		friends:['anton','denis','olga', 'vladimir'],
		sellMango: false,
	},
	oleg:{
		friends:['anton', 'vad'],
		sellMango:true,
	}
};

/**
 * graph tree that reprsents a
 * pile of boxes in which every box can contain other boxes
 * one of box has key inside .hasKey === true
 * classic structure to test recursion search algorithms
 * @type {Object}
 */
const pileOfBoxes = {
    id:1,
    hasKey:false,
    boxes:[
        {
            id: 11,
            hasKey: false,
            boxes:[],
        },
        {
            id:12,
            hasKey: false,
            boxes:[
                {
                    id: 21,
                    hasKey: false,
                    boxes:[],
                },
                {
                    id:22,
                    hasKey: true,
                    boxes:[],
                },
            ],
        },
        {
            id:13,
            hasKey: false,
        },
    ]
};

/**
 * graph tree represent fictional roadmap for several cities.
 * requred for dijkstra algorithm and other that search for
 * shortest routes/costs
 * @type {Object}
 */
const cities = {
	hrodna: {
		minsk:290,
		lida:100,
		slonim:130
	},
	minsk: {
		vitebsk: 280,
		bobruisk:60
	},
	bobruisk: {
		kobrin: 40,
		hrodna:100,
	},
	slonim:{
		minsk: 200,
	},
	kobrin:{
		vitebsk: 70
	},
	lida:{
		minsk: 190,
		bobruisk:100,
	},
	vitebsk: {
		minsk: 280
	}
};
const cititesCostsResults = {
	minsk: 290,
	lida:100,
	slonim:130,
	vitebsk: Infinity,
	bobruisk: Infinity,
	kobrin: Infinity,
};
const citiesPathResult = {
	path: ['hrodna', 'lida', 'bobruisk', 'kobrin', 'vitebsk'],
	value: (100+ 100 +40 +70)
};


export {fruitSellers, pileOfBoxes, cititesCostsResults, cities, citiesPathResult}