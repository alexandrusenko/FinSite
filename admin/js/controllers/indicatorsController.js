'use strict';

adminApp.controller('indicatorsControllerList', 
	function($scope, $http){
		$http.get('back/indicators/select.php?id=0').success(function(data,status,headers,config){
			console.log(data);
			$scope.indicators = data;
		});

		$scope.sortField = undefined;
		$scope.reverse = false;

		$scope.sort = function(fieldName){
			if($scope.sortField === fieldName){
				$scope.reverse = !$scope.reverse;
			} else {
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
		};
	}
);

adminApp.controller('indicatorsControllerEdit', 
	function($scope, $routeParams, $http, $location){
		$http.get('back/indicators/select.php?id='+$routeParams.id).success(function(data,status,headers,config){
			$scope.item = data[0];
		});

		$scope.save = function() {
			$http.post('back/indicators/update.php', 
				{'id': $scope.item.id, 'name': $scope.item.name, 'code': $scope.item.code}
                ).success(function(data, status, headers, config) {
                        console.log(data);
                        $location.path('/indicators');
                    });
		};
		$scope.delete = function() {
			$http.post('back/indicators/delete.php', 
				{'id': $scope.item.id}
                ).success(function(data, status, headers, config) {
                        console.log(data);
                        $location.path('/indicators');
                    });
		};
	}
);

adminApp.controller('indicatorsControllerNew', 
	function($scope, $http, $location){
		$scope.item = {id:0, name:'', code:0};
		
		$scope.save = function() {
			$http.post('back/indicators/update.php', 
				{'id': $scope.item.id, 'name': $scope.item.name, 'code': $scope.item.code}
                ).success(function(data, status, headers, config) {
                        console.log(data);
                        $location.path('/indicators');
                    });
		};
	}
);
