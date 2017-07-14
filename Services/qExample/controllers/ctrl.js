app.controller("ctrl",ctrl);
function ctrl($scope,my_service,$q) {

    $q.all([my_service.fun_one(),my_service.fun_two()]).then(function (res) {
        $scope.var_one = res[0];
        $scope.var_two = res[1];
    });

}