/**
 *
 * @author Schubert Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Schubert System </br>
 * Schubert system Copyright - NewPortBay LLC copy_right_range</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

app.controller("SearchListScreen_Default_Activity", [ '$scope', '$rootScope', '$location', '$window', '$q', '$http', 'RestURL',
				    function( $scope, $rootScope, $location, $window, $q, $http, RestURL) {

		$scope.SearchListScreen = {
		id: '',
		username : '',
		user_id : '',
		created_on : '',
		script_executed_on : '',
		json_created_on : ''
		};



        $scope.search = function () {

		  //this is where the start code goes
		  	$scope.SearchListScreen.username = $scope.SearchListScreen.username? $scope.SearchListScreen.username:"%%";
		  	$scope.SearchListScreen.user_id = $scope.SearchListScreen.user_id? $scope.SearchListScreen.user_id:"%%";
		  	$scope.SearchListScreen.created_on = $scope.SearchListScreen.created_on? $scope.SearchListScreen.created_on:"%%";
		  	$scope.SearchListScreen.script_executed_on = $scope.SearchListScreen.script_executed_on? $scope.SearchListScreen.script_executed_on:"%%";
		  	$scope.SearchListScreen.json_created_on = $scope.SearchListScreen.json_created_on? $scope.SearchListScreen.json_created_on:"%%";


		  //this is where the validate code goes

		  //this is where the confirm code goes

		  var deferred = $q.defer();
		  $http.get(RestURL.baseURL+'/SearchListScreen_Default_Activity/SearchListScreen/search?username='+$scope.SearchListScreen.username+'&user_id='+$scope.SearchListScreen.user_id+'&created_on='+$scope.SearchListScreen.created_on+'&script_executed_on='+$scope.SearchListScreen.script_executed_on+'&json_created_on='+$scope.SearchListScreen.json_created_on).success(function(response) {
		  console.log(response);
		  var search_result = [];
		  response.forEach(function(entry) {
		  var row = {
				'id':entry.id,	  	
    			'username': entry.username,
    			'user_id': entry.user_id,
    			'created_on': entry.created_on,
   				'script_executed_on': entry.script_executed_on,
    			'json_created_on': entry.json_created_on
    	  };
		  search_result.push(row);
		  });
		  handle_search_result(search_result);
		  }).error(function(err) {
		  alert('You got' + err + 'error');
		  deferred.reject(err);
		  });

		  //this is where the server response code goes

		  //this is where the display server response code goes

		  //this is where the transition code goes

		  //this is where the end code goes 



        };




		$scope.gridOptions = {
		enableRowSelection: true,
		enableSelectAll: false
		};
		function handle_search_result(search_result){
		console.log('search_result data ',angular.toJson(search_result));
		$scope.gridOptions.data = search_result;
		}

		$scope.gridOptions.columnDefs = [
		{ displayName: 'Id', name: 'id'},
		{ displayName: 'user_id', name: 'user_id'},
		{ displayName: 'username', name: 'username'},
		{ displayName: 'created_on', name: 'created_on'},
		{ displayName: 'script_executed_on', name: 'script_executed_on'},
		{ displayName: 'json_created_on', name: 'json_created_on'}
		
		];
		$scope.$on('$viewContentLoaded', function(event) {
			var biggestHeight = 0;
			var height = 0;
			$(".screen").find('*').each(function(){
				height = $(this).position().top + $(this).height() + 100;
				if (height > biggestHeight ) {
					biggestHeight = height;
				}
			});
			$(".screen").height(biggestHeight);
		});

		$scope.refresh_screen_height = function() {
			var biggestHeight = 0;
			var height = 0;
			$(".screen").find('*').each(function(){
				height = $(this).position().top + $(this).height() + 100;
				if (height > biggestHeight ) {
					biggestHeight = height;
				}
			});
			$(".screen").height(biggestHeight);
		};

}]);

