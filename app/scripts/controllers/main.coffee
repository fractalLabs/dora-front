'use strict'

###*
 # @ngdoc function
 # @name doraFrontApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the doraFrontApp
###
angular.module 'doraFrontApp'
  .controller 'MainCtrl', ($scope, Clj) ->
    $scope.url = ""
    $scope.expr = ""
    $scope.data = ""
    $scope.send = ->
      console.log $scope.url
      #$scope.expr = '(validate "' + $scope.url + '")'
      $scope.expr = '(str \"lol\" "' + $scope.url + '")'
      Clj.evalClojure $scope.expr
      $scope.data = Clj.getReturn().jresult
