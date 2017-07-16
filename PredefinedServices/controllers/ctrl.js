app.controller("ctrl",ctrl);
function ctrl($scope,my_service) {
    my_service.fun_one().then(function (res) {
        $scope.var_one = res;
    });
};