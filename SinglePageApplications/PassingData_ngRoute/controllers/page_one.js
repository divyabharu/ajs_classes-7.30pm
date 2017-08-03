app.controller("page_one",page_one);
function page_one($scope,$routeParams) {
    $scope.var_one = $routeParams.param1+"..."+$routeParams.param2+"..."+$routeParams.param3;
}