app.controller("portfolioController",portfolioController);
function portfolioController($scope,homeService) {


    homeService.getMySQLData().then(function (res) {
        $scope.portfolio=res;
    });
}