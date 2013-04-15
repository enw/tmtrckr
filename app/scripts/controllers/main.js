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

      $scope.nuke = function (idx) {
        console.log("nuke", idx);

        // this is wrong because the list is filtered!
	// $scope.tasks.splice(idx,idx);

	// this feels clumsy
	var indexFound;
	var mainListIndex=0;
        while (!indexFound) {
	    var testItem = $scope.tasks[mainListIndex];
	    if (testItem.active) indexFound=true;
	    mainListIndex++;
	}
        $scope.tasks.splice(mainListIndex, mainListIndex);

	updateLocalStorage(); 
      };

      $scope.add = function (what) {
        $scope.tasks.push({what:what,done:false, active:false});
	updateLocalStorage();
      };
    });

