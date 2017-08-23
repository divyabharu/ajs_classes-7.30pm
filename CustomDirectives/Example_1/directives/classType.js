app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b style='color: red'>Welcome to CSS Class Type Custom Directive !</b></div>"
    }
}