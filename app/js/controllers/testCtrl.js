angular.module('polsie-beta-grid').controller('testCtrl', testCtrl);

testCtrl.$inject = ['$scope', '$state'];

function testCtrl($scope, $state){
  $scope.changeState = function(){
    $state.go('second');
  };
};
