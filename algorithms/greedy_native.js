
/**
 * Greedy algorithm implementation
 * https://en.wikipedia.org/wiki/Greedy_algorithm
 * At this particular example algorithm is calculation optimal amount of radio-stations
 * to cover given cities list
 * @param graph
 * @param {Array} coverage - coverage map for chosen items
 * @return {Array} - list of node names that do coverage effectively
 */
function greedy(graph, coverage){
	if(!graph || typeof graph !=='object' || Object.keys(graph).length === 0){
		throw new Error('graph object should be provided');
	}
	if(!coverage || coverage.constructor.name !== "Array"){
		throw new Error('Coverage map should be provided');
	}

	let result = [];
	let required = new Set(coverage);
	let remain = copyObject(graph);
	let currentName;
	let spotted = new Set();

	do{
		let current = new Set();

		for(const key in remain){
			if(remain.hasOwnProperty(key)){
				const val = remain[key];
				const selected = new Set(val);
				const intersection = new Set([...selected].filter(x=>{return required.has(x)}));

				if(intersection.size && selected.size > current.size){
					spotted = intersection;
					current = selected;
					currentName = key;
				}
			}
		}

		required = new Set([...required].filter(x=>{ return !spotted.has(x)}));
		result.push(currentName);
		delete remain[currentName];

		if(current.size === 0){
			break;
		}
	}
	while (required.size > 0 && Object.keys(remain).length > 0);

	return result;
}

function copyObject(source) {
	const result = {};

	for(const key in source){
		if(source.hasOwnProperty(key)){
			result[key] = source[key];
		}
	}

	return result;
}

export {greedy}