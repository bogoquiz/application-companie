

appModule.controller("searchCtrl", searchCompany);

searchCompany.$inject = ['serviceCompany','$scope','$http'];

function searchCompany (serviceCompany, $scope, $http) {
    
	var vm = this
    
    $scope.getAutocompleteResults = (query, deferred) => {  	
        //let url ="https://api.myjson.com/bins/2ggcs"
		//$http.get(url).success((function (deferred, data) { // send request
		serviceCompany.getCompany().success((function (deferred, data) { // send request          
            
			var results = [];

			data.map((item) => {
				if (item.comapnyName.toLowerCase().search(query.toLowerCase()) != -1){
					results.push({value: item.comapnyName,
								  companyData: item});
					
				}
			})

            // resolve the deferred object
			deferred.resolve({results: results});

		}).bind(this, deferred));
	};

	$scope.$on('sznAutocomplete-select', function(event,data){
		
		vm.company = data.itemData.companyData
		console.log(vm.company, data)

	})
}	

appModule.component('searchComponent',{
	templateUrl: 'app/templates/search.html',
	controller: 'searchCtrl',
	controllerAs: 'vm'
});