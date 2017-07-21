app.controller("ctrl",ctrl);
function ctrl($scope) {
    $scope.my_array = [{'p_id':1,'p_name':'laptop','p_cost':50000},
        {'p_id':2,'p_name':'mobile','p_cost':10000},
        {'p_id':3,'p_name':'smart tv','p_cost':150000},
        {'p_id':4,'p_name':'watch','p_cost':50000},
        {'p_id':5,'p_name':'tab','p_cost':20000}];
}