(function () {
    "use strict";

    app.controller("header",header);
    function header($scope) {
        $scope.logout = function () {
            alert("Logged Out Successfully !");
        };
    };

})();


