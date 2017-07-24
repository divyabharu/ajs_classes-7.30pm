app.directive("attrType",attrType);
function attrType(){
    return{
        restrict:"A",
        template:"<div class='jumbotron'><b style='color: red;text-align: center'>Attribute Type Custom Directive !</b></div>"
    }
}


app.directive("classType",classType);
function classType(){
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b style='color: green;text-align: center'>Class Type Custom Directive !</b></div>"
    }
}


app.directive("elemType",elemType);
function elemType(){
    return{
        template:"<div class='jumbotron'><b style='color: blue;text-align: center'>Element Type Custom Directive !</b></div>"
    }
}


app.directive("commentType",commentType);
function commentType(){
    return{
        restrict:"M",
        template:"<div class='jumbotron'><b style='color: blue;text-align: center'>Element Type Custom Directive !</b></div>"
    }
}
