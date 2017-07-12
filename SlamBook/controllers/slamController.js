(function () {
    "use strict";
    app.controller("slamController",slamController);
    slamController.$inject=["$scope"];
    function slamController($scope) {
        $scope.slam="Slam Page Soon....";
    }
})();