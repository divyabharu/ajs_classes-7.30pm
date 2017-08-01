app.controller("ctrl_two",ctrl_two);
function ctrl_two($scope,my_service) {
    $scope.clickMe = function () {
        $scope.var_one = my_service.getData();
    };
};