angular.module('polsie-beta-grid').directive('ngMenu', function(){
  return {
    restrict: 'A', // detects an attribute name ng-menu
    scope: {}, // isolated scope
    link: function(scope, element, attrs){

      element.css({'background-color': 'blue'});
      element.children().css({'background-color': 'red'});

      console.log(element);
      console.log(element.children());



      
      /*
      var $element = element[0];
      console.log($element);

      $element.css({'background-color': 'red'});

      /*
      var $container = document.getElementsByClassName('links');
      console.log($container);

      var test = angular.element($container);
      console.log(test);
      */




      element.bind('mousedown', function(event){
        console.log(1);
      });



    }
  } /* return closer */
});
