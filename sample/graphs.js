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

export {fruitSellers, pileOfBoxes}