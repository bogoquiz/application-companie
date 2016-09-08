

appModule.controller("filterCtrl", filterCompany);

searchCompany.$inject = ['serviceCompany','$scope','$http'];

function filterCompany (serviceCompany, $scope, $http) {
    
	var vm = this

	vm.choose = function (department) {

		vm.company = [];
		serviceCompany.getCompany().then((data) => {
		data.data.map((item) => {

				if (item.companyDepartments.search(department) != -1){
					 console.log(department)
					vm.company.push(item)
					
				}
			})
		})
	}
    
}	

appModule.component('filterComponent',{
	templateUrl: 'app/templates/filter.html',
	controller: 'filterCtrl',
	controllerAs: 'vm'
});