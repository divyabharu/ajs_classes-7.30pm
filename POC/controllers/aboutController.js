app.controller("aboutController",aboutController);
function aboutController($scope,homeService) {

    homeService.aboutData().then(function (res) {
        $scope.about = res;
    });



}