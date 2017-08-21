app.controller("contactController",contactController);
function contactController($scope,homeService){
    homeService.contactData().then(function(res){
        $scope.contact = res;
    });
};