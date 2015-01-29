angular.module('polsie-beta-grid').controller('landingCtrl', landingCtrl);

landingCtrl.$inject = ['$scope', '$state', '$document'];

function landingCtrl($scope, $state, $document){

  $scope.showLinks = function(){
    $scope.isShown = !$scope.isShown;
  };

};
