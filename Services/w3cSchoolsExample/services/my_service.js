app.service("my_service",my_service);
function my_service($http) {
    this.getData = function () {
        return $http.get("https://www.w3schools.com/angular/customers.php").then(function (posRes) {

            return posRes.data.records;
        },function (errRes) {

            return errRes;
        });
    };
};