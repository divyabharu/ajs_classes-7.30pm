app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:"A",
        template:"<div class='jumbotron'><b>Welcome to Attribute Type Custom Directive !</b></div>"
    }
}