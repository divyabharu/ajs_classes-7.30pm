(function () {
    "use strict";
    app.service("loginService",loginService);
    loginService.$inject=["$http"];
    function loginService($http) {
        this.authenicate = function (login_details) {
            return $http.post("/SlamBook/login/login",login_details).then(function (posRes) {
                return posRes;
            },function (errRes) {
                return errRes;
            });
        };
    }
})();