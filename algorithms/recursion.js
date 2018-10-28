function look_for_key_in_box(box) {
    let result = null;
    if(!box){
        return null;
    }
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
    if(!items || items.constructor !== Array){
        return null;
    }
    if(items.length < 2){
        return items[0] || 0;
    }else{
        return items.shift() + sum(items);
    }
}
function count(items){
    if(!items || items.constructor !== Array){
        return null;
    }
    if(items.length <1){
        return 0;
    }
    items.pop();
    return 1 + count(items)
}
function max(items){
    if(!items || items.constructor !== Array){
        return null;
    }
    if(items.length ===1){
        return item[0];
    }
    if(items.length === 2){
        return Math.max(items[0], items[1])
    }
    const first = items.shift();

    return Math.max(first,max(items));
}

export {look_for_key_in_box, sum, count, max }