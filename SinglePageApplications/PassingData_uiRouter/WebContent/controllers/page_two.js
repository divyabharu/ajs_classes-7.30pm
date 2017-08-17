app.controller("page_two",page_two);
function page_two($scope,$stateParams){
	$scope.var_two=$stateParams.id+"...."+$stateParams.name+"..."+$stateParams.age;
}