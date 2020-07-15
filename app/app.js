'use strict';

var myApp = angular.module('myApp', [])

myApp.controller('ReactController',
    function($scope) {
      $scope.title = 'react'
    })
myApp.directive('reactComponent',
    function () {
      return {
        restrict: 'E',
        template: "<input type='text' name='dates' />"
      }
    })
