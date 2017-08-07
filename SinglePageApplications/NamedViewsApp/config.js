app.config(config);
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/page_one");

    $stateProvider.state("page_one", {
        url: "/page_one",
        views: {
            '': {
                templateUrl: "templates/page_one.html",
                controller: "page_one"
            },
            'calc@page_one': {
                templateUrl: "templates/calc.html",
                controller: "calc"
            },
            'summary@page_one': {
                templateUrl: "templates/summary.html",
                controller: "summary"
            }
        }
    })
    .state("page_two", {
        url: "/page_two",
        templateUrl: "templates/page_two.html",
        controller:"page_two"
    });
    
}