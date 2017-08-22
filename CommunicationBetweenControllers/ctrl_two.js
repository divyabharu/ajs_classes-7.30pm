app.controller("ctrl_two",ctrl_two);
function ctrl_two($scope,my_service) {
    $scope.getData = function () {
        $scope.result = my_service.getMyVar();
    };
};