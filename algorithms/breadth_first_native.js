/**
 * condition that you would like to check on item. For now it is just checking 'sellMango' property change for you own
 * @param {Object} val - item from list you are checking for some conditions.
 * @returns {boolean} whether conditions work
 */
function matchCondition(val) {
    return val.sellMango ? true : false;
}
// export function breadthFirst(list, start){
function breadthFirst(list, start){
    const qu = [];
    const passed = {};


    qu.push(start);
    passed[start] = true;

    while(qu.length) {
        const item = qu.shift();
        passed[item] = true;

        if(matchCondition(list[item])){
            return item;
        }else{
            list[item].friends.forEach((val)=>{
                if(!passed[val]){
                    qu.push(val);
                    passed[val] = true;

                }
            });
        }
    }
}
export {breadthFirst}