app.config(config);
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("page_one",{
       url:"/page_one",
       views:{
           '':{
               templateUrl:"templates/page_one.html",
               controller:"page_one"
           },
           'calc@page_one':{
               templateUrl:"templates/calc.html",
               controller:"calcController"
           },
           'summary@page_one':{
               templateUrl:"templates/summary.html",
               controller:"summaryController"
           }
       }

    })
        .state("page_two",{
            url:"/page_two",
            templateUrl:"templates/page_two.html",
            controller:"page_two"
        });
    $urlRouterProvider.otherwise("/page_one");


}