app.directive("header",header);
function header() {
    return{
        restrict:"AE",
        templateUrl:"templates/header.html",
        controller:"header"
    }
}