app.controller("feedbackController",feedbackController);
function feedbackController($scope,homeService) {
    homeService.feedbackData().then(function (res) {
        $scope.feedback = res;
    });
};