'use strict'

###*
 # @ngdoc function
 # @name doraFrontApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the doraFrontApp
###
angular.module 'doraFrontApp'
  .controller 'AboutCtrl', ($scope, Clj, $http) ->
    #$scope.data= [{"a": 1, "b": 2}, {"a": 3, "b": 4}]
    $scope.revisar = () ->
      console.log "revisando...", $scope.url
      #console.log 'http://fractal-api.fractal.ai/?expr=(validate "
      $http({
        method: "GET",
        url: 'http://fractal-api.fractal.ai/?expr=(validate "' + $scope.url + '")'
      }).then( (response) ->
        $scope.data = response.data.jresult
        console.log("then: ", response.data.jresult))