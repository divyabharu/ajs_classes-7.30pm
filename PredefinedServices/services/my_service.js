app.service("my_service",my_service);
function my_service($http) {
    this.fun_one = function () {
        return $http.get("https://www.w3schools.com/angular/customers.php").then(function (posRes) {
            console.log(posRes);
            return posRes.data.records;
        },function (errRes) {
            return errRes;
        });
    };
}