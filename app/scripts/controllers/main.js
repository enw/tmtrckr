'use strict';

angular.module('tmtrkrApp')
  .controller('MainCtrl', function ($scope) {
      // FILTER
      $scope.isDone = function (item) {
          return item.done;
        };

      // MODEL
      $scope.tasks = [
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

      // EVENTS AND HELPERS
      $scope.start = function (item) {
        item.active = true;
      };

      $scope.stop = function (item) {
        item.active = false;
      };

      $scope.complete = function(item) {
        item.done = true;
      };

      $scope.input = 'eh?';
      $scope.add = function (what) {
        console.log('ADD', what);
        $scope.tasks.push({what:what,done:false, active:false});
      };
    });

