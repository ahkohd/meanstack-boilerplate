/////////////// ANGULAR LOGICS STAYS HERE ////////////////

// app.js
var meanApp = angular.module('meanApp', ['ngAnimate', 'ui.router']);


meanApp.controller('stackController', function($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all Stacks and show them
  $http.get('/api/stacks')
    .success(function(data) {
      $scope.stacks = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createStack = function() {
    $http.post('/api/stacks', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.stacks = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a stack after checking it
  $scope.deleteStack = function(id) {
    $http.delete('/api/stacks/' + id)
      .success(function(data) {
        $scope.stacks = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

});











meanApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
    url: '/home',
    templateUrl: '/js/angular/views/partial-home.html'
  })


  .state('stacks', {

    url: '/stacks',
    templateUrl: '/js/angular/views/partial-stacks.html'

  })

  .state('about', {

    url: '/about',
    templateUrl: '/js/angular/views/partial-about.html'

  });

});






///////////////////////////
/// CONFIGURE STATE     ///
///////////////////////////

/*
 * ASSIGN VIEW PRELOADER
 */

$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $scope.preloader = false;
    });
$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.preloader = true;
});