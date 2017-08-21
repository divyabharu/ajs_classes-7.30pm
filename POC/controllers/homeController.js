app.controller("homeController",homeController);
function homeController($scope,$location,$localStorage) {
    $scope.logout = function () {
        delete $localStorage.poc;
        $location.path("/login");
    };
};