app.controller("ctrl",ctrl);
function ctrl($scope,my_service) {
    my_service.getData().then(function (res) {
        $scope.result = res;
    });
}