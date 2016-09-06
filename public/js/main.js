var app = angular.module('mainApp', ['ngResource']);

app.factory('Auth', ['$resource',
    function($resource) {
      return $resource('/auth', {}, {
        update: {
          method: 'PUT'
        },
        delete: {
          method:"DELETE"
        }
      });
    }
]);

app.factory('Activity', ['$resource',
    function($resource) {
      return $resource('/activity/:id', {}, {
        get: {
          method: 'GET'
        },
        delete: {
          method:'DELETE'
        },
        create: {
          method:'POST'
        },
        update:{
          method:"PUT"
        }
      });
    }
]);

app.controller('mainCtrl', function PhoneListController($scope,Activity,Auth) {
  $scope.user = {};
  $scope.editUser = function() {
      $scope.user.private = localStorage.private;
      $("#modalUser").modal("show");
  }

  $scope.updateUser = function() {
      Auth.update({},{
        login: localStorage.login,
        password:$scope.user.password,
        newpassword: $scope.user.newpassword,
        private: $scope.user.private
      },function(res) {
        if(res.response == 500 ){
          alert("The old password is invalid, please try again.");
        }else if(res.response==200){
          $("#modalUser").modal("hide");
        }
        
      })
  }

  $scope.deleteUser = function() {
      $("#modalDeleteUser").modal("show");
  }

  $scope.confirmDeleteUser = function() {
      Auth.delete({
        login: localStorage.login,
        password:$scope.user.password
      },function(res) {
        if(res.response ==200){
          $("#modalDeleteUser").modal("hide");
          $scope.logout();
        }else if(res.response == 500){
          alert("Error in deleting user, please try again.");
        }
      })
  }
  $scope.cancelDeleteUser = function() {
     $("#modalDeleteUser").modal("hide");
  }

  $scope.logout = function() {
      localStorage.removeItem("login");
      window.location.href="/";
  }



  $scope.refresh = function() {
    Activity.get({id:localStorage.login},function(res){
        //console.log(res);

        $scope.activities = res.activities
    })
  }
  $scope.delete = function(idActivity) {
     $("#modalDelete").modal("show");
     $scope.deleteActivity = idActivity;
    
  }
  $scope.confirmDelete = function(){
    $("#modalDelete").modal("hide");
     Activity.delete({id:$scope.deleteActivity},function(res){
        console.log(res);
        $scope.refresh();
    })
  }
  $scope.cancelDelete = function() {
     $("#modalDelete").modal("hide");
  }
  $scope.save = function() {
    if($scope.editing.idActivity!=undefined) {
        $scope.update();
    }else {
        $scope.add();
    }
  }
  $scope.edit = function(a) {
    $scope.editing = a;
    $("#modal").modal("show");
  }
  $scope.update = function() {
    Activity.update({
      idActivity: $scope.editing.idactivity,
      start: $scope.editing.start,
      length: $scope.editing.length,
      description: $scope.editing.description,
      login:localStorage.login
    },function(res) {
      $("#modal").modal("hide");
      $scope.refresh();
    })
  }
  $scope.showAdd = function() {
    $scope.editing = {};
    $("#modal").modal("show");
  }
  $scope.add = function() {
    Activity.create({
      start: $scope.editing.start,
      length: $scope.editing.length,
      description: $scope.editing.description,
      login:localStorage.login
    },function() {
      $("#modal").modal("hide");
      $scope.refresh();
    });
  }
});