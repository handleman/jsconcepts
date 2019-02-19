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
		subsequence:null,
	};

	examples.forEach((val)=>{
		const example = val.split('');

		for(let i =0; i < query.length; i++){

			for(let j=0; j < example.length; j++){

			}

		}

	});

	/**
	 * calculate value for each calcualtion matrix cell.
	 */
	function calculateWeight() {

	}
}

export {dynamic}