app.controller("ctrl_one",ctrl_one);
function ctrl_one($scope,my_service) {
    $scope.clickMe = function (arg1) {
        my_service.setData(arg1);
    };
};