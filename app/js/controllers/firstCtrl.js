angular.module('polsie-beta-grid').controller('firstCtrl', firstCtrl);

firstCtrl.$inject = ['$scope', '$state'];

function firstCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('second');
  };
};
