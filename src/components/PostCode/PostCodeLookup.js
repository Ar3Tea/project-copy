let _json;
export function getNearestVenue(userInput) {
	//console.log({ userInput, _json })
	if (_json) {
		return Promise.resolve(_json[userInput]);
	}
  	return fetch("/PostCodeData.json")
    	.then(r => r.json())
    	.then(json => {
		    //console.log({ json }, json[userInput])
			_json = json;
      		return json[userInput];
    	});
}
