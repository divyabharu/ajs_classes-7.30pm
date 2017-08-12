app.controller("contactController",contactController);
function contactController($scope,homeService) {
    homeService.getMongoData().then(function (res) {
        $scope.contact=res;
    });
}