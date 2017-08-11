app.config(config);
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
        });
}