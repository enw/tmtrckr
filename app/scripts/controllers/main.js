'use strict';

angular.module('tmtrkrApp')
  .controller('MainCtrl', function ($scope) {
      // FILTER
      $scope.isTodo = function (item) {
          return !item.done;
        };

      $scope.isDone = function (item) {
          return item.done;
        };

      // HELPERS
      $scope.todoCount = function () {
	  var tasks = $scope.tasks;
	  var count=0;
	  for (var i=0;i<tasks.length;i++) {
	      var task = tasks[i];
	      if ($scope.isTodo(task)) count++;
	  }
	  return count;
      };

      $scope.doneCount = function () {
	  var tasks = $scope.tasks;
	  var count=0;
	  for (var i=0;i<tasks.length;i++) {
	      var task = tasks[i];
	      if ($scope.isDone(task)) count++;
	  }
	  return count;
      };

      // LOCALSTORAGE
      // set value based on localStorage
      if (localStorage.tasks == undefined) {
	  localStorage.tasks = JSON.stringify([]);
      };
      var tasks = JSON.parse(localStorage.tasks);
      function updateLocalStorage () {
	  localStorage.tasks = JSON.stringify(tasks);
      }
      
      // bootstrap localstorage.tasks during development....
      /*
	tasks = [
        {what:'Create scaffolding using yo', done:true, active:true},
        {what:'add ability to start work', done:true, active:true},
        {what:'add ability to complete task', done:true, active:true},
        {what:'add done filter', done:true, active:true},
        {what:'Add creating new ones', done:true, active:false},
        {what:'Add creating new ones (multiple views + routing)', done:false, active:false},
        {what:'Add datestamp', done:false, active:false},
        {what:'Add localstorage', done:false, active:false},
        {what:'refactor into directives', done:false, active:false},
        {what:'Add categories', done:false, active:false},
        {what:'Add timetracking', done:false, active:false},
      ];
      */

      // MODEL
      $scope.tasks = tasks;

      // EVENTS AND HELPERS
      $scope.start = function (item) {
        item.active = true;
	updateLocalStorage(); 
      };

      $scope.stop = function (item) {
        item.active = false;
	updateLocalStorage();
      };

      $scope.complete = function(item) {
        item.done = true;
	updateLocalStorage();
      };

      $scope.nuke = function (task) {
        var tasks = $scope.tasks;
        for(var i=0;i<tasks.length;i++) {
            var curr = tasks[i];
            if (curr.id == task.id) {
              $scope.tasks.splice(i, 1);
            }
        }

	updateLocalStorage(); 
      };

    });

