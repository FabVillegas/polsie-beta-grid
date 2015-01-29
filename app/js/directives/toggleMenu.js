angular.module('polsie-beta-grid').directive('toggleMenu', function($window, $document){
  return {
    restrict: 'C', // detects an classname
    scope: false, // parent scope
    link: function(scope, element, attrs){
      if ($document[0].body.offsetWidth >= 768){
        scope.displayIcon = false;
        scope.isShown = true;
        scope.$apply('isShown = ' + true); /* show menu */
      }
      else{
        scope.displayIcon = true;
      }

      var target = angular.element($window);
      scope.display = function(value){
        scope.$apply('displayIcon = ' + value);
      };

      target.bind('resize', function(){
        var currentSize = $document[0].body.offsetWidth;
        if (currentSize < 768){
          scope.display(true);
        }
        else if(currentSize >= 768 ){
          scope.display(false);
          scope.$apply('isShown = ' + true); /* show menu */
        }
      });
    }
  } /* return closer */
});
