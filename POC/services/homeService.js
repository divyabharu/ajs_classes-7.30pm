app.service("homeService",homeService);
function homeService($http,$localStorage) {

    this.getStaticData = function () {
        return $http.post("http://localhost:8080/about",{"token":$localStorage.poc.data.token}).then(function (posRes) {
           return posRes.data.products;
        },function (errRes) {
            return errRes;
        });
    };


    this.getMySQLData = function () {
        return $http.post("http://localhost:8080/portfolio",{"token":$localStorage.poc.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };

    this.getMongoData = function () {
        return $http.post("http://localhost:8080/contact",{"token":$localStorage.poc.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };
}