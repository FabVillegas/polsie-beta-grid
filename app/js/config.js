angular.module('polsie-beta-grid', [
  'ui.router'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('test');
	$stateProvider.
	state('test', {
		url: '/test',
		templateUrl: 'views/test-view.html',
		controller: 'testCtrl'
	}).
	state('second', {
		url: '/second',
		templateUrl: 'views/secondTemplate.html',
		controller: 'secondCtrl'
	});
}]);


var isLoggedIn = function($firebase, $state, firebaseRefFactory){
	var ref = new Firebase(firebaseRefFactory.getMainRef());
	var authData = ref.getAuth();
	if (authData) {
	  console.log("Authenticated user with uid:", authData.uid);
		return;
	}
	else{
		// send user to login state/route
		$state.go('login');
	}
};
