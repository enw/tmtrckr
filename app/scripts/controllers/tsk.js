'use strict';
// for new tasks
angular.module('tmtrkrApp')
  .controller('TskCtrl', function ($scope) {
      // MODEL
      $scope.task = {what:'', done:false, active:false};

      // LOCALSTORAGE
      // set value based on localStorage
      if (localStorage.tasks === undefined) {
        localStorage.tasks = JSON.stringify([]);
      }

      // initialize tasks from localStorage
      var tasks = JSON.parse(localStorage.tasks);

      // push changes back into storage
      function updateLocalStorage () {
          localStorage.tasks = JSON.stringify(tasks);
        }

      // ACTIONS
      // based on the add() function in main.js but also changes location url
      // ??? what is the best practice for this type of thing?
      // ??? to use $location service?
      $scope.add = function () {
        $scope.task.id=Math.random();
        tasks.push($scope.task);
        window.location = '#/'; // go back to home screen. better way to do this?
        updateLocalStorage();
      };
    }
);

