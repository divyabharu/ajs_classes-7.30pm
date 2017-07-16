app.controller("aboutController",aboutController);
function aboutController($scope,homeService) {
    homeService.fetchData().then(function (res) {
        $scope.about = res;
    });

}