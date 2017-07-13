app.service("my_service",my_service);
function my_service($http,$q) {

    var deffered_one = $q.defer();
    this.fun_one = function () {
        return $http.get("http://demosoft.highgrowth.in/test/jsonexample.php").then(function (posRes) {
            deffered_one.resolve(posRes);
            return deffered_one.promise;
        },function (errRes) {
            deffered_one.reject(errRes);
            return deffered_one.promise;
        });
    };


    var deffered_two = $q.defer();
    this.fun_two = function () {
        return $http.get("http://test-routes.herokuapp.com/test/hello").then(function (posRes) {
            deffered_two.resolve(posRes);
            return deffered_two.promise;
        },function (errRes) {
            deffered_two.reject(errRes);
            return deffered_two.promise;
        });
    };
}