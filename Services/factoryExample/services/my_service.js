app.factory("my_service",my_service);
function my_service() {
    var obj = new my_class("Data from MongoDB....","Data from SQL Server....");
    var my_obj = {'key1':obj.fun_one(),'key2':obj.fun_two()};
    return my_obj;
}