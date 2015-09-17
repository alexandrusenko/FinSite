'use strict';

adminApp.controller('industriesControllerList', 
	function($scope, $http){
		$http.get('back/industries/select.php?id=0').success(function(data,status,headers,config){
			console.log(data);
			$scope.industries = data;
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

adminApp.controller('industriesControllerEdit', 
	function($scope, $routeParams, $http, $location){
		$http.get('back/industries/select.php?id='+$routeParams.id).success(function(data,status,headers,config){
			$scope.item = data[0];
		});

		$scope.save = function() {
			$http.post('back/industries/update.php', 
				{'id': $scope.item.id, 'name': $scope.item.name}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/industries');
                    });
		};
		$scope.delete = function() {
			$http.post('back/industries/delete.php', 
				{'id': $scope.item.id}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/industries');
                    });
		};
	}
);

adminApp.controller('industriesControllerNew', 
	function($scope, $http, $location){
		$scope.item = {id:0, name:''};
		
		$scope.save = function() {
			$http.post('back/industries/update.php', 
				{'id': $scope.item.id, 'name': $scope.item.name}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/industries');
                    });
		};
	}
);
