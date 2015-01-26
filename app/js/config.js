angular.module('polsie-beta-grid', [
  'ui.router',
  'ngAnimate'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('landing');
	$stateProvider.
	state('landing', {
		url: '/landing',
		templateUrl: 'views/landing-template.html',
		controller: 'landingCtrl'
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
