app.controller("ctrl",ctrl);
function ctrl($scope,my_service) {
    $scope.clickMe = function (data) {
        my_service.getData(data).then(function (res) {
            $scope.result = res;
        });
    };
};