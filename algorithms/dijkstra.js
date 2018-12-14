/**
 * Dijkstra's algorithm for graphs
 * https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 * @param graph
 * @param {String} start - name of starting point (graph's node)
 * @param {String} finish - name of finishing point (graph's node)
 * @return {{path: Array, value: number}} - result: path - array of nodes name that build the shortest path, value - exact value of shortest path
 */
function dijkstra(graph, start, finish){
	const path = [];
	const value = Infinity;
	return {path, value};
}
export {dijkstra}