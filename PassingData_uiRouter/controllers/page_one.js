app.controller("page_one", page_one);
function page_one($scope,$stateParams) {
    $scope.var_one = $stateParams.p_id + "..." + $stateParams.p_name + "..." + $stateParams.p_cost;
}