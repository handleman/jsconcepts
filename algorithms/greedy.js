/**
 * Greedy algorithm implementation
 * https://en.wikipedia.org/wiki/Greedy_algorithm
 * At this particular example algorithm is calculation optimal amount of radiostations
 * to cover given cities list
 * @param graph
 * @param {Array} coverage - coverage map for chosen items
 * @return {Array} - list of node names that do coverage effectively
 */
function greedy(graph, coverage){
	if(!graph || typeof graph !=='object' || Object.keys(graph).length === 0){
		throw new Error('graph object should be provided');
	}
	if(!coverage || typeof coverage.constructor.name === "Array"){
		throw new Error('Coverage map should be provided');
	}
	let result = [];

	return result;
}

export {greedy}