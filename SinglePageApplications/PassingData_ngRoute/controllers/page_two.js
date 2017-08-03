app.controller("page_two",page_two);
function page_two($scope,$routeParams) {
    $scope.var_two = $routeParams.param1+"..."+$routeParams.param2+"..."+$routeParams.param3;
}