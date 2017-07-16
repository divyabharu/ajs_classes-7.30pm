app.service("my_service",my_service);
function my_service($http,$q) {

    var deffered_one  = $q.defer();
    this.fun_one = function () {
        return $http.get("http://demosoft.highgrowth.in/test/jsonexample.php")
                .then(function (posRes) {
            deffered_one.resolve(posRes.data.posts);
            return deffered_one.promise;
        },function (errRes) {
            deffered_one.reject(errRes);
            return deffered_one.promise;
        });
    };


    this.fun_two = function () {
      return $http.post("http://test-routes.herokuapp.com/test/uppercase",{'message':'welcome to angularjs'}).then(function (posRes) {
          return posRes.data.message;
      },function (errRes) {
          return errRes;
      });
    };
};