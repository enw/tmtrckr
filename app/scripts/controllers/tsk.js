'use strict';

angular.module('tmtrkrApp')
  .controller('TskCtrl', function ($scope, $routeParams) {
      console.log ("TSK CNTRL", $routeParams);
      $scope.task = {what:"", done:false, active:false};
      
      $scope.add = function () {
	  console.log("add", $scope.task);
      };
  });

