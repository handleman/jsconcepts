function binary_search(arr, item) {
    // checking values to be valid
    if((!item && item !== 0) || !arr || arr.constructor !== Array|| item.constructor !== Number){
        return null;
    }
    // checking array to be sorted
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){
            return null;
        }
    }
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        const mid = Math.floor((max + min) / 2);
        const guess = arr[mid];

        if (item === guess) {
            return mid;
        } else if (item < guess) {
            max = mid - 1
        } else {
            min = mid + 1;
        }
    }
    return null;
}

export default binary_search;





