'use strict';

adminApp.controller('reportsControllerList', function($scope, $http, $location, FileUploader){
		$scope.curPage = 0;
 		$scope.pageSize = 15;
 		$scope.sortField = undefined;
		$scope.reverse = false;

		$http.get('back/reports/select.php?id=0').success(function(data,status,headers,config){
			//console.log(data);
			$scope.reports = data;
		});
		
		$http.get('back/issuers/select.php?id=0').success(function(data,status,headers,config){
			$scope.issuers = data;
		});

		$scope.sort = function(fieldName){
			if($scope.sortField === fieldName){
				$scope.reverse = !$scope.reverse;
			} else {
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
		};

		$scope.numPages = function () {
			if ($scope.reports != undefined) {
				return Math.ceil($scope.reports.length / $scope.pageSize);	
			}
		};
	}
).filter('pagination', function(){
 	return function(input, start){
 		if (input != undefined) {
 			start = +start;
  			return input.slice(start);
 		}
  		
  	};
});



adminApp.controller('uploadReportsController', ['$scope','$http','FileUploader', function($scope, $http, FileUploader) {
        var uploader = $scope.uploader = new FileUploader({
            url: 'upload.php'
        });

        $scope.ExportToMySql = function(el){
        	var filename = el.file.name;
        	var year = filename.substr(filename.length-8, 4);
        	var quarter = filename.substr(filename.length-9, 1);
        	var ticker = filename.substr(0, filename.length-9);
        	//console.log(ticket, year, quarter);
        	$http.post('back/ExcelToMysql.php', 
				{'filename': ('../uploads/'+filename),'ticker': ticker, 'quarter': quarter, 'year': year}
                ).success(function(data, status, headers, config) {
                        console.log(data);
                        el.isWrote = true;
                    }); 
        };

        $scope.ExportToMySqlAll = function(){
        	$scope.uploader.queue.map(function(x,i){
        		$scope.ExportToMySql(x);
        	})
        };

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }]);
