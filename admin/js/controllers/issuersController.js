'use strict';

adminApp.controller('issuersControllerList', function($scope, $http){
		$http.get('back/issuers/select.php?id=0').success(function(data,status,headers,config){
			console.log(data);
			$scope.issuers = data;
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

adminApp.controller('issuersControllerEdit', 
	function($scope, $routeParams, $location, $http){
		$http.get('back/issuers/select.php?id='+$routeParams.id).success(function(data,status,headers,config){
			$scope.item = data[0];
		});

		$http.get('back/industries/select.php?id=0').success(function(data,status,headers,config){
			$scope.industries = data;
		});
		$scope.save = function() {
			$http.post('back/issuers/update.php', 
				{'id': $scope.item.id, 'ticker': $scope.item.ticker, 'name': $scope.item.name, 'industry': $scope.item.industry, 'ogrn': $scope.item.ogrn}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/issuers');
                    });
		};

		$scope.delete = function() {
			$http.post('back/issuers/delete.php', 
				{'id': $scope.item.id}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/issuers');
                    });
		};
	}
);

adminApp.controller('issuersControllerNew',  
	function($scope, $location, $http){
		$scope.item = {id:0, ticker:'', name:'', industry:'', ogrn:''};
		$http.get('back/industries/select.php?id=0').success(function(data,status,headers,config){
			$scope.industries = data;
			console.log($scope.data);
		});
		
		$scope.save = function() {
			$http.post('back/issuers/update.php', 
				{'id': $scope.item.id, 'ticker': $scope.item.ticker, 'name': $scope.item.name, 'industry': $scope.item.industry, 'ogrn': $scope.item.ogrn}
                ).success(function(data, status, headers, config) {
                        if (data.error.length >0){
                        	alert(data.error);
                        }
                        $location.path('/issuers');
                    });
		};
	}
);
