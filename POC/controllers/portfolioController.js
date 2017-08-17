app.controller("portfolioController",portfolioController);
function portfolioController($scope,homeService) {
    homeService.portfolioData().then(function (res) {
        $scope.portfolio=res;
    });
};