app.service("homeService",homeService);
function homeService($http,$localStorage) {

    this.aboutData = function () {
        return $http.post("http://localhost:8080/about",{'token':$localStorage.poc.data.token}).then(function (posRes) {
            return posRes.data.products;
        },function (errRes) {
            return errRes;
        });
    };


    this.portfolioData = function () {
        return $http.post("http://localhost:8080/portfolio",{'token':$localStorage.poc.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };

    this.feedbackData = function () {
        return $http.post("http://localhost:8080/feedback",{'token':$localStorage.poc.data.token}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };

}