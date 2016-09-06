var app = angular.module('loginApp', ['ngResource']);

app.factory('Auth', ['$resource',
    function($resource) {
      return $resource('/auth/login', {}, {
        login: {
          method: 'POST'
        }
      });
    }
]);
app.factory('AuthNew', ['$resource',
    function($resource) {
      return $resource('/auth/signup', {}, {
        create: {
          method: 'POST'
        }
      });
    }
]);

app.controller('loginCtrl', function PhoneListController($scope,Auth,AuthNew) {
  $scope.signin = function() {
    var l = Auth.login({
      login:$scope.login,
      password:$scope.password
    },function(res) {
         //console.log(res);
         if(res.response ==200){
            localStorage.private = res.private;
            localStorage.login = $scope.login
            window.location.href="/index";
         }else {
            alert(res.message);
         }
    });
  }
  $scope.signup = function() {
    AuthNew.create({
      login:$scope.login,
      password:$scope.password,
      private:$scope.private
    },function(res) {
       if(res.response ==200){
        localStorage.private = $scope.private;
        localStorage.login = $scope.login
        window.location.href="/index";
      }else {
        alert(res.message);
      }
    });
  }
});