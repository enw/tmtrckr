'use strict';

angular.module('tmtrkrApp')
  .controller('MainCtrl', function ($scope) {
/*
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/
      $scope.tasks = [
	  {what:"Create scaffolding using yo", done:false, active:true}, 
	  {what:"Add creating new ones", done:false, active:false}, 
	  {what:"Add creating new ones (multiple views + routing)", done:false, active:false}, 
	  {what:"Add datestamp", done:false, active:false}, 
	  {what:"Add localstorage", done:false, active:false}, 
	  {what:"refactor into directives", done:false, active:false}, 
	  {what:"Add categories", done:false, active:false}, 
	  {what:"Add timetracking", done:false, active:false}, 
      ];
  });
