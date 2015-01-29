angular.module('polsie-beta-grid').controller('firstCtrl', firstCtrl);

<<<<<<< HEAD
firstCtrl.$inject = ['$scope', '$state'];

function firstCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('second');
  };
=======
firstCtrl.$inject = ['$scope', '$state', '$document'];

function firstCtrl($scope, $state, $document){

  if($document[0].body.offsetWidth < 768){
    $scope.isShown = false;
  }
  else{
    $scope.isShown = true;
  }

  $scope.showLinks = function(){
    $scope.isShown = !$scope.isShown;
  };

>>>>>>> master
};
