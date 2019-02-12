/**
 * graph to test wide-search algorithm
 * @type {{olga: {sellMango: boolean, friends: string[]}, pavel: {sellMango: boolean, friends: string[]}, denis: {sellMango: boolean, friends: string[]}, vad: {sellMango: boolean, friends: string[]}, tania: {sellMango: boolean, friends: string[]}, oleg: {sellMango: boolean, friends: string[]}, anton: {sellMango: boolean, friends: string[]}}}
 */
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

/**
 * graph tree to test greedy algorithm
 * this is list of radio stations and list of cities each of them  covers
 * @type {{"Новое Радио": string[], "Юмор FM": string[], "Русское Радио": string[], "Радио Могилев": string[], "Альфа Радио": string[], "Душевное Радио": string[], Unistar: string[], "Радио Брест": string[], "Радио Витебск": string[], "Пилот FM": string[], "Радио Би-Эй": string[], "Зефир FM": string[]}}
 */
const radio = {
	'Unistar':['hrodna', 'minsk', 'bobruisk', 'mogilev', 'gomel', 'brest', 'lida', 'pinsk'],
	'Новое Радио':['minsk', 'vitebsk','hrodna', 'gomel', 'brest' ],
	'Русское Радио':['hrodna', 'minsk', 'vitebsk', 'gomel', 'brest', 'pinsk'],
	'Душевное Радио':['hrodna', 'vitebsk', 'bobruisk'],
	'Радио Брест':[ 'slonim', 'brest', 'lida', 'pinsk'],
	'Юмор FM':['hrodna', 'gomel', 'brest', 'lida', 'pinsk'],
	'Пилот FM':['brest', 'lida', 'pinsk'],
	'Радио Би-Эй':['minsk',  'slonim', 'lida', 'pinsk'],
	'Радио Витебск':[ 'vitebsk'],
	'Радио Могилев':[ 'mogilev'],
	'Альфа Радио':['slonim', 'mogilev', 'gomel', 'brest', 'pinsk'],
	'Зефир FM':['bobruisk', 'gomel'],
};


export {fruitSellers, pileOfBoxes, cititesCostsResults, cities, citiesPathResult, radio}