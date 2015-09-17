var adminApp = angular.module('adminApp', ['angularFileUpload'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/issuers',{templateUrl:'views/issuers/list.html',controller:'issuersControllerList'});
		$routeProvider.when('/issuers/new',{templateUrl:'views/issuers/edit.html',controller:'issuersControllerNew'});
		$routeProvider.when('/issuers/edit/:id',{templateUrl:'views/issuers/edit.html',controller:'issuersControllerEdit'});
		$routeProvider.when('/industries',{templateUrl:'views/industries/list.html',controller:'industriesControllerList'});
		$routeProvider.when('/industries/new',{templateUrl:'views/industries/edit.html',controller:'industriesControllerNew'});
		$routeProvider.when('/industries/edit/:id',{templateUrl:'views/industries/edit.html',controller:'industriesControllerEdit'});
		$routeProvider.when('/indicators',{templateUrl:'views/indicators/list.html',controller:'indicatorsControllerList'});
		$routeProvider.when('/indicators/new',{templateUrl:'views/indicators/edit.html',controller:'indicatorsControllerNew'});
		$routeProvider.when('/indicators/edit/:id',{templateUrl:'views/indicators/edit.html',controller:'indicatorsControllerEdit'});
		$routeProvider.when('/reports',{templateUrl:'views/reports/list.html',controller:'reportsControllerList'});
		$routeProvider.when('/reports/upload',{templateUrl:'views/reports/uploadReports.html',controller:'uploadReportsController'});
		$routeProvider.otherwise({redirectTo: '/issuers'});
});