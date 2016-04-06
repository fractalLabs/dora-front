(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name doraFrontApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the doraFrontApp
   */
  angular.module('doraFrontApp').controller('MainCtrl', function($scope, Clj, $http) {
    $scope.url = "";
    $scope.expr = "";
    $scope.send = function() {
      console.log($scope.url);
      $scope.expr = '(str \"lol\" "' + $scope.url + '")';
      console.log($scope.expr);
      return $scope.data = Clj.evalClojure($scope.expr).jresult;
    };
    return $scope.watch(function() {
      return Clj.getReturn();
    }, function(newReturn) {
      refresh();
      console.log('new return: ', newReturn);
      return $scope.data = newReturn.jresult;
    });
  });

}).call(this);

//# sourceMappingURL=main.js.map
