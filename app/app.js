'use strict';

const myApp = angular.module('myApp', ['react'])

myApp.controller('reactController',
  ['$scope', function ($scope) {
      $('input[name="dates"]').daterangepicker();
      $scope.date = { value: '' };
    }]);

const ReactComponent = React.createClass({
  render: function() {
    return React.DOM.span(null, `Componente React: ${this.props.value}`);
  }
});

myApp.value('ReactComponent', ReactComponent);