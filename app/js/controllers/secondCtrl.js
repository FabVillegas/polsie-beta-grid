angular.module('polsie-beta-grid').controller('secondCtrl', secondCtrl);

secondCtrl.$inject = ['$scope', '$state', '$document'];

function secondCtrl($scope, $state, $document){


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
