(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name doraFrontApp.controller:AboutCtrl
    * @description
    * # AboutCtrl
    * Controller of the doraFrontApp
   */
  angular.module('doraFrontApp').controller('AboutCtrl', function($scope, Clj, $http) {
    return $scope.revisar = function() {
      console.log("revisando...", $scope.url);
      return $http({
        method: "GET",
        url: 'http://fractal-api.fractal.ai/?expr=(validate "' + $scope.url + '")'
      }).then(function(response) {
        $scope.data = response.data.jresult;
        return console.log("then: ", response.data.jresult);
      });
    };
  });

}).call(this);

//# sourceMappingURL=about.js.map
