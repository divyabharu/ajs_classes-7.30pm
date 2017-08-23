app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b style='color: red'>Welcome to Class Type Custom Directive !</b></div>"
    }
}