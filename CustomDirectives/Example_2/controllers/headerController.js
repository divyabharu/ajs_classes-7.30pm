app.controller("headerController",headerController);
function headerController($scope) {
    $scope.logout = function () {
        alert("Logged Out Successfully !");
    };
};