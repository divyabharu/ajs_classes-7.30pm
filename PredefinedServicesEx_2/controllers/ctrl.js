app.controller("ctrl",ctrl);
function ctrl($scope,my_service,$q) {

    /*my_service.fun_one().then(function (posRes) {
        $scope.var_one = posRes;
    });

    my_service.fun_two().then(function (res) {
       $scope.var_two = res;
    });*/

    $q.all([my_service.fun_one(),my_service.fun_two()]).then(function (res) {
        $scope.var_one = res[0];
        $scope.var_two = res[1];
    });

};