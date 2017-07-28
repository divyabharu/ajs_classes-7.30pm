app.controller("contactController",contactController);
function contactController($scope,homeService) {

    $scope.obj={};
    $scope.contactDetails = function () {
        homeService.contactData($scope.obj).then(function (res) {
            $scope.contact = res;
        });
    };


}