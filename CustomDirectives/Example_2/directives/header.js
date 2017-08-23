app.directive("header",header);
function header() {
    return{
        templateUrl:"templates/header.html",
        controller:"headerController"
    }
}