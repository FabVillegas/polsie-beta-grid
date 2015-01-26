angular.module('polsie-beta-grid').controller('landingCtrl', landingCtrl);

landingCtrl.$inject = ['$scope', '$state', '$document'];

function landingCtrl($scope, $state, $document){

  $scope.displayIcon = true;

  if($document[0].body.offsetWidth < 768){
    $scope.isShown = false;
  }
  else{
    $scope.isShown = true;
  }

  $scope.showLinks = function(){
    $scope.isShown = !$scope.isShown;
  };

};
