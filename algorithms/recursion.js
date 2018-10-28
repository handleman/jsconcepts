function look_for_key_in_box(box) {
    let result = null;
    if(box.hasKey){
        return box;
    }
    else if(box.boxes && box.boxes.length){
        box.boxes.some((val)=>{
            result = look_for_key_in_box(val);
            if( result !== null){
                return true;
            }
        })
    }
    return result


}
function sum(items){
    if(items.length < 2){
        return items[0] || 0;
    }else{
        return items.shift() +sum(items);
    }
}
function count(item){
    if(item.length <1){
        return 0;
    }
    item.pop();
    return 1 + count(item)
}
function max(item){
    if(item.length ===1){
        return item[0];
    }
    if(item.length === 2){
        return Math.max(item[0], item[1])
    }
    const first = item.shift();

    return Math.max(first,max(item));
}

export {look_for_key_in_box, sum, count, max }