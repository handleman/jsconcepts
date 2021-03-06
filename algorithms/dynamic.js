/**
 * should find the longest common subsequence
 * @param {String} searchQyery string user want to find
 * @param {Array} examples array of variants from which algorithm needs to chose
 */
function dynamic(searchQyery, examples){
	const query = searchQyery.split('');

	let results = {};
	let optimum = {};

	examples.forEach((val)=>{
		const example = val.split('');
		let result = {
			matrix:[],
			matchLength:0,
			subsequence:[],
		};
		for(let i =0; i < query.length; i++){
			let clip = [];
			result.matrix.push([]);
			for(let j=0; j < example.length; j++){
				let relevant;
				if (query[i] === example[j]){

					if(!clip.includes(example[j])){

						if (result.matrix[i-1] !== undefined &&  result.matrix[i-1][j-1]  !== undefined){
							relevant = result.matrix[i-1][j-1] + 1;
						}else{
							relevant = 1
						}

						result.subsequence.push(query[i]);
						result.matchLength++;
						clip.push(query[i]);
					}else{
						relevant = result.matrix[i][j-1]
					}

				}else{

					if(result.matrix[i-1] && result.matrix[i-1][j] !== undefined && result.matrix[i][j-1] !== undefined){
						relevant = Math.max(result.matrix[i-1][j], result.matrix[i][j-1]) ;
					}else if (result.matrix[i-1] && result.matrix[i-1][j]  !== undefined ){
						relevant = result.matrix[i-1][j];
					}else {
						relevant = 0;
					}
				}
				result.matrix[i].push(relevant);
			}

		}

		results[val] = result;
	});

	Object.keys(results).forEach((key)=>{
		if(Object.keys(optimum).length === 0){
			optimum = results[key];
			optimum.suggestion = key;
		}
		if(results[key].matchLength > optimum.matchLength){
			optimum = results[key];
			optimum.suggestion = key;
		}
	});


	return optimum.suggestion;

}

export {dynamic}