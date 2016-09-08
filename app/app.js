var appModule=angular.module('appModule',[
				'ngComponentRouter',
				'angular-szn-autocomplete'
				]);

appModule.value('$routerRootComponent','app');

appModule.component('app',{
	template: '<header-component></header-component><ng-outlet></ng-outlet>',
	$routeConfig:[
		{path:'/',component:'homeComponent',name:'Home'},
		{path:'/search',component:'searchComponent',name:'Search'},
		{path:'/filter',component:'filterComponent',name:'Filter'},

	]
});