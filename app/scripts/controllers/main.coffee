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
    $scope.send = ->
      console.log $scope.url
