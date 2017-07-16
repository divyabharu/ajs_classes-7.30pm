app.service("loginService",loginService);
function loginService($http) {
    this.authenticate = function (data) {
        return $http.post("http://localhost:8080/login",data).then(function (posRes) {
           return posRes;
        },function (errRes) {
            return errRes;
        });
    };
};