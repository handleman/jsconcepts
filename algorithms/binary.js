function binary_search(arr, item){
  let min = 0;
  let max = arr.length -1;
  
  while (min <= max){
    const mid = Math.floor((max+min)/2);
    const guess = arr[mid];
    
    
    if(item==guess){
       return mid;
      } else
    if(item < guess){
      max=mid-1
    }else {
      min = mid+1;
     }
  }
  return null;
}
export default binary_search;





