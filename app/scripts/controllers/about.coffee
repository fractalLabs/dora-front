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
    $scope.url = ""
    $scope.expr = ""
    $scope.send = ->
      console.log $scope.url
      #$scope.expr = '(validate "' + $scope.url + '")'
      $scope.expr = '(str \"lol\" "' + $scope.url + '")'
      console.log $scope.expr
      $scope.data = Clj.evalClojure($scope.expr).jresult

    $scope.watch(
      -> Clj.getReturn(),
      (newReturn) ->
        refresh()
        console.log('new return: ', newReturn)
        $scope.data = newReturn.jresult)
