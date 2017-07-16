app.service("homeService",homeService);
function homeService($http,$localStorage) {
    this.fetchData = function () {
        return $http.post("http://localhost:8080/about",{'token':$localStorage.workshop.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };
};