app.controller("ctrl_one",ctrl_one);
function ctrl_one($scope,my_service) {
    $scope.var_one = my_service;
}