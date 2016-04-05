(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name doraFrontApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the doraFrontApp
   */
  angular.module('doraFrontApp').controller('MainCtrl', function($scope) {
    $scope.url = "";
    return $scope.send = function() {
      return console.log($scope.url);
    };
  });

}).call(this);

//# sourceMappingURL=main.js.map
