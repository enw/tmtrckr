'use strict';
// for new tasks
angular.module('tmtrkrApp')
  .controller('TskCtrl', function ($scope, $routeParams) {
      console.log ("TSK CNTRL", $routeParams);

      // MODEL
      $scope.task = {what:"", done:false, active:false};

      // LOCALSTORAGE
      // set value based on localStorage
      if (localStorage.tasks == undefined) {
	  localStorage.tasks = JSON.stringify([]);
      };
      var tasks = JSON.parse(localStorage.tasks);
      function updateLocalStorage () {
	  localStorage.tasks = JSON.stringify(tasks);
      }

      // ACTIONS
      
      // copied from main.js.... should be put in a service?
      $scope.add = function () {
        tasks.push($scope.task);
	updateLocalStorage();
      };
      }
);

