app.config(config);
function config($stateProvider,$urlRouterProvider){
	$stateProvider.state("page_one",{
		url:"/page_one",
		templateUrl:"templates/page_one.html",
		controller:"page_one"
	})
	
	.state("page_one.child_one",{
		url:"/child_one",
		templateUrl:"templates/child_one.html",
		controller:"child_one"
	})
	.state("page_two",{
		url:"/page_two",
		templateUrl:"templates/page_two.html",
		controller:"page_two"
	})
	.state("page_two.child_two",{
		url:"/child_two",
		templateUrl:"templates/child_two.html",
		controller:"child_two"
	});
	
	$urlRouterProvider.otherwise("/page_one");
}