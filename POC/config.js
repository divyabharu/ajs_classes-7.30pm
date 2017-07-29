/*
    $stateChangeStart is a interceptor in ui.router module
    this interceptor will execute before each routing in application
    in general interceptors will implement by using $rootScope
 */

app.run(run).config(config);
function run($localStorage,$rootScope,$location) {
    $rootScope.$on("$stateChangeStart",function (event,fromState,fromParams,toState,toParams) {

        if(!$localStorage.poc){
            $location.path("/login");
        }
    });
};


function config($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
    })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"homeController"
        })
        .state("home.about",{
            url:"/about",
            templateUrl:"templates/about.html",
            controller:"aboutController"
        })
        .state("home.portfolio",{
            url:"/portfolio",
            templateUrl:"templates/portfolio.html",
            controller:"portfolioController"
        })
        .state("home.contact",{
            url:"/contact",
            templateUrl:"templates/contact.html",
            controller:"contactController"
        });
}