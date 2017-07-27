app.service("loginService",loginService);
function loginService($http) {
    this.authenticate = function (user_details) {
        return $http.post("http://localhost:8080/login",user_details).then(function (posRes) {
            return posRes;
        },function (errRes) {
            return errRes;
        });
    }
}