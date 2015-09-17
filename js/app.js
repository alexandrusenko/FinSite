var adminApp = angular.module('finApp', [])
	.config(function ($routeProvider, $locationProvider) {
	    $routeProvider.when('/inbox', { templateUrl: 'views/inbox/list.html', controller: 'inboxControllerList' });
	    $routeProvider.when('/user', { templateUrl: 'views/user/list.html', controller: 'userControllerList' });
	    $routeProvider.when('/off', { templateUrl: 'views/off/list.html', controller: 'offControllerList' });
	    $routeProvider.when('/desktop', { templateUrl: 'views/desktop/list.html', controller: 'desktopControllerList' });
	    $routeProvider.when('/stocks', { templateUrl: 'views/stocks/list.html', controller: 'stocksControllerList' });
	    $routeProvider.when('/currency', { templateUrl: 'views/currency/list.html', controller: 'currencyControllerList' });
	    $routeProvider.when('/commodity', { templateUrl: 'views/commodity/list.html', controller: 'commodityControllerList' });
	    $routeProvider.when('/indices', { templateUrl: 'views/indices/list.html', controller: 'indicesControllerList' });
		$routeProvider.otherwise({redirectTo: '/desktop'});
});