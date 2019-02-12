import Set from '../data-structures/set';

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

				if(Set.intersection(selected, required).get().length && selected.get().length > current.get().length){
					spotted = Set.intersection(selected, required);
					current = selected;
					currentName = key;
				}
			}
		}


		required = Set.difference(required, spotted);
		result.push(currentName);
		delete remain[currentName];
		if(current.get().length === 0){
			break;
		}
	}
	while (required.get().length > 0 && Object.keys(remain).length > 0);

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