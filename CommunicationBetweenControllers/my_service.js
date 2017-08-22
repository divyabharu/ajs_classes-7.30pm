app.service("my_service",my_service);
function my_service() {
    this.my_var="";

    this.setMyVar = function (arg1) {
        this.my_var = arg1;
    };

    this.getMyVar = function () {
        return this.my_var;
    };
}