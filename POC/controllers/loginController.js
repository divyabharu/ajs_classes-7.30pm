app.controller("loginController",loginController);
function loginController($scope,loginService,$localStorage,$location) {
    $scope.login = function (data) {
        loginService.authenticate(data).then(function (res) {
            if(res.data.login == 'success'){
                $localStorage.workshop = res;
                $location.path("/home");
            }else{
                alert("Invalid Details !");
            }
       });
    };
};