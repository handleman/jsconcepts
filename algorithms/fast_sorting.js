const fast_sort = (item) => {
	if(item && Array.isArray(item)){
		if(item.length <= 2 ){
			return item;
		}
		else{
			var pivot = item[Math.floor((item.length)/2)-1];
			item.splice(item.indexOf(pivot),1);
			var leftPart = item.filter(function(val){ return val <= pivot});
			var rightPart = item.filter(function(val){ return val > pivot});
			return fast_sort(leftPart).concat([pivot], fast_sort(rightPart))
		}
	}else{
		return null;
	}
};
export default fast_sort;