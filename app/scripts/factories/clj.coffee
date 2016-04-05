'use strict'

# Se encarga de hacer las consultas al backend

angular.module('doraFrontApp')
  .factory 'Clj', ($http, $resource, $routeParams, $rootScope) ->

    # Inicializacion de return
    # Si tiene parametros la url despliega mensaje de conectando
    # Si no, solo avisa que esta listo para usarse.
    if $routeParams.expr
      rreturn =
        result: "Connecting",
        jresult: [{data: "Connecting"}],
        tipo: {tipo: "string"}
    else
      rreturn =
        result: "Ready",
        jresult: [{data: "Ready"}],
        tipo: {tipo: "string"}

    # getRerurn - El return alamacenado en rreturn.
    #
    # evalClojure -Envia peticiona al backend para procesar el código
    #   Si es exitoso asigna el return a la variable rreturn
    #   Si falla envia un eror a la consola.
    # evalNoSet - Envia peticion al backend, pero no asigna el valor a returnn
    #   lo devuelve
    getReturn: ->
      rreturn
    evalClojure: (code) ->
      console.log('evalClojure is called, with code: ', code)
      $http.post('http://fractal-api.fractal.ai', expr: code)
      #$http.post('http://fractal.ai/api/repl', expr: code)
        .then(
          (data) ->
            rreturn = data.data
            console.log('reset data', data.data)
            return data.data
          () ->
            console.log("ERROR in $scope.eval_clojure"))
    evalNoSet: (code) ->
      $http.post('http://fractal-api.fractal.ai', expr: code)
        .then(
          (data) ->
            data.data
          () ->
            console.log("ERROR in $scope.eval_clojure"))
