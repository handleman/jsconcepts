/**
 * should find the longest common subsequence
 * @param {String} searchQyery string user want to find
 * @param {Array} examples array of variants from which algorithm needs to chose
 */
function dynamic(searchQyery, examples){
	const query = searchQyery.split();
	const result = {
		matrix:[],
		length:0,
		subsequence:[],
		suggestion:''
	};

	examples.forEach((val)=>{
		const example = val.split('');

		for(let i =0; i < query.length; i++){
			result.matrix([]);
			for(let j=0; j < example.length; j++){
				let relevant;
				if (query[i] === example[j]){
					relevant = result.matrix[i-1][j-1] || 1;
					result.subsequence.push(query[i]);
					result.length = result.length < relevant;
					if (result.length < relevant){
						result.suggestion = example.join('');
					}

				}else{
					relevant = Math.max(result.matrix[i-1][j], result.matrix[i][j-1]) || 0;
				}
				result.matrix[i].push(relevant);
			}

		}

	});
	return result;

}

export {dynamic}