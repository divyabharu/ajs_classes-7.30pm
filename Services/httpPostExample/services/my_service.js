app.service("my_service",my_service);
function my_service($http) {
    this.getData = function (data) {
        return $http.post("http://test-routes.herokuapp.com/test/uppercase",data).then(function (posRes) {
            return posRes.data.mes;
        },function (errRes) {
            return errRes;
        });
    };
};