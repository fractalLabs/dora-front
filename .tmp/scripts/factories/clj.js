(function() {
  'use strict';
  angular.module('doraFrontApp').factory('Clj', function($http, $resource, $routeParams, $rootScope) {
    var rreturn;
    if ($routeParams.expr) {
      rreturn = {
        result: "Connecting",
        jresult: [
          {
            data: "Connecting"
          }
        ],
        tipo: {
          tipo: "string"
        }
      };
    } else {
      rreturn = {
        result: "Ready",
        jresult: [
          {
            data: "Ready"
          }
        ],
        tipo: {
          tipo: "string"
        }
      };
    }
    return {
      getReturn: function() {
        return rreturn;
      },
      evalClojure: function(code) {
        console.log('evalClojure is called, with code: ', code);
        return $http.post('http://fractal-api.fractal.ai', {
          expr: code
        }).then(function(data) {
          rreturn = data.data;
          console.log('reset data', data.data);
          return data.data;
        }, function() {
          return console.log("ERROR in $scope.eval_clojure");
        });
      },
      evalNoSet: function(code) {
        return $http.post('http://fractal-api.fractal.ai', {
          expr: code
        }).then(function(data) {
          return data.data;
        }, function() {
          return console.log("ERROR in $scope.eval_clojure");
        });
      }
    };
  });

}).call(this);

//# sourceMappingURL=clj.js.map
