(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name doraFrontApp
    * @description
    * # doraFrontApp
    *
    * Main module of the application.
   */
  angular.module('doraFrontApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.grid', 'ngProgress']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map

(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name doraFrontApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the doraFrontApp
   */
  angular.module('doraFrontApp').controller('MainCtrl', function($scope, Clj) {
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
