appModule.factory('serviceCompany', serviceCompany);

function serviceCompany($http){

	return {

		getCompany: getCompany

	};

	function getCompany(){

		let url ="https://api.myjson.com/bins/2ggcs"
		return $http.get(url)

	}

}