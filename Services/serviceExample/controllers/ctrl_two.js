app.controller("ctrl_two",ctrl_two);
function ctrl_two($scope,my_service) {
    $scope.var_two = my_service.fun_two();
}