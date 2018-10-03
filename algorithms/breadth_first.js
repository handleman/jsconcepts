import Queue from '../data-structures/queue.js';
var foo = {
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



function matchCondition(val) {
    return val.sellMango ? true : false;
}
// export function breadthFirst(list, start){
function breadthFirst(list, start){
    const qu = new  Queue();
    const passed = {};


    qu.push(start);
    passed[start] = true;

    while(qu.length()){
        const item = qu.pop();
        if(matchCondition(list[item])){
            return item;
        }else{
            list[item].friends.forEach((val)=>{
                if(!passed[val]){
                    qu.push(val);
                }
            });
        }
    }
}
export {breadthFirst, foo}