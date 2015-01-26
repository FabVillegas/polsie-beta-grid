angular.module('polsie-beta-grid').directive('ngMenuToggle', function($document) {
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attrs){



      element.bind('click', function(){
        //console.log($document[0].querySelector('.ng-menu'));
        var target = $document[0].querySelector('.ng-menu');
        var surrogate = angular.element(target);
        //surrogate.css({'background-color': 'blue'});
        hide(surrogate);

      });

    } /* link closer */
  }
});
