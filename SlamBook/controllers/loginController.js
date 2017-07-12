(function () {
    "use strict";
    app.controller("loginController",loginController);
    loginController.$inject=["$scope","loginService","$localStorage","$location"];
    function loginController($scope,loginService,$localStorage,$location) {
        $scope.login={};
        $scope.login_details = function () {
           loginService.authenicate($scope.login).then(function (response) {
              if(response.data.login=="success"){
                  $localStorage.slambook=response;
                  $location.path("/slam");
              }else{
                  alert("Wrong Details !");
              }
           });
        };
    };
})();