/**
 * condition that you would like to check on item. For now it is just checking 'sellMango' property change for you own
 * @function isSellingMango
 * @param {Object} val - item from list you are checking for some conditions.
 * @returns {boolean} whether conditions work
 */
function isSellingMango(val) {
	return val.sellMango ? true : false;
}

/**
 * "Breadth First" search algorithm for graphs
 * https://en.wikipedia.org/wiki/Breadth-first_search
 * @function breadthFirst
 * @param list {!Object} - List of graph's nodes in a form of hash table
 * @param start {!String} - Name of starting node
 * @param match {!Function} - Callback which define matching conditions (what to find)
 * @returns {String} - Name of (pointer to) node that match the given condition.
 */
function breadthFirst(list, start, match){
	// all arguments are mandatory and should be checked
	if(
		arguments.length < 3 ||
		typeof list !== 'object' ||
		list === null ||
		Object.keys(list).length === 0 ||
		typeof start !== 'string' ||
		typeof match !== 'function'
	){
		throw new Error('Wrong arguments list.')
	}

	const qu = [];
    const passed = {};

    qu.push(start);
    passed[start] = true;

    while(qu.length) {
        const item = qu.shift();
        passed[item] = true;
		if(list[item]) {
			if (match(list[item])) {
				return item;
			} else {
				list[item].friends.forEach((val) => {
					if (!passed[val]) {
						qu.push(val);
						passed[val] = true;

					}
				});
			}
		}
    }
    return null;
}
export {breadthFirst, isSellingMango}