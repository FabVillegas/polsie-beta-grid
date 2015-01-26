angular.module('polsie-beta-grid').controller('firstCtrl', firstCtrl);

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

};
