/**
 * Dijkstra's algorithm for graphs
 * https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 * @param graph
 * @param {String} start - name of starting point (graph's node)
 * @param {String} finish - name of finishing point (graph's node)
 * @return {{path: Array, value: number}} - result: path - array of nodes name that build the shortest path, value - exact value of shortest path
 */
function dijkstra(graph, start, finish){
	if(!graph || typeof graph !=='object' || Object.keys(graph).length === 0){
		throw new Error('graph object should be provided');
	}
	if(!start || typeof start !=='string'){
		throw new Error('start node name should be provided');
	}
	if(!finish || typeof finish !=='string'){
		throw new Error('finish node name should be provided');
	}
	const path = [];
	let parents = {};
	let costs = calculateCosts(graph, start);
	let checked = {};
	let neighbors;
	let currentCost;
	let nodeName;

	nodeName = findLowestCost(costs, checked);

	while (nodeName){
		currentCost = costs[nodeName];
		neighbors = graph[nodeName];

		for(const neghborName in neighbors){
			const neghborSum = currentCost + neighbors[neghborName];
			if(costs[neghborName] > neghborSum){
				costs[neghborName] = neghborSum;
				parents[neghborName] = nodeName;

			}
		}
		checked[nodeName] = true;
		nodeName = findLowestCost(costs, checked);
	}

	let trace;
	trace = finish;

	do{
		if(trace){
			path.unshift(trace)
		}
		trace = parents[trace];
	}
	while (trace);

	path.unshift(start);

	return {path, value: costs[finish]};
}

/**
 * return nodename which have the lowest cost (weight)
 * @param {Object} costs - hash table that store costs of each nodes inside graph
 * @param {Object} checked - has table for storing nodes that were processed already and should be avoided
 * @return {String | null} - name for node with lowest value (weight)
 */
function findLowestCost(costs, checked) {
	let result = Object.keys(costs)[0];

	for (const key in costs){
		if(costs[key] < costs[result] && !checked[key]){
			result = key;
		}
	}
	return !checked[result] ? result : null;
}

/**
 * processes graph to prepare special hash table which consist unique node name together with its
 * value (weight) relatively to starting point.
 * all nodes which doesnt share edge with starting point are marked as Infinite
 * Needs to be called ONE SINGLE TIME time before processing through algorithm
 * @param {Object} graph -graph to proceed
 * @param {String} startPoint - name for starting (entry point) node
 */
function calculateCosts(graph, startPoint) {
	if(!startPoint){
		throw new Error("start point should be defined")
	}

	const startCosts = graph[startPoint];
	const unic = {};

	for (const nodeName in graph){
		if (nodeName !== startPoint && !unic.hasOwnProperty(nodeName)){
			if(startCosts.hasOwnProperty(nodeName)){
				unic[nodeName] = startCosts[nodeName];
			}else{
				unic[nodeName] = Infinity;
			}
		}

	}
	return unic;

}
export {dijkstra, calculateCosts}