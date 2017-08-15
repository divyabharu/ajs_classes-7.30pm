app.controller("loginController",loginController);
function loginController($scope) {
    $scope.obj={};
    $scope.login_details = function () {
        console.log($scope.obj);
    };
};