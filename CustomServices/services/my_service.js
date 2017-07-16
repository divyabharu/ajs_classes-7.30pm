/*
app.factory("my_service",my_service);
function my_service() {
    return new my_class().my_fun();
}*/


/*app.config(config);
function config(my_serviceProvider) {
    my_serviceProvider.db_password="root_two";
}

app.provider("my_service",my_service);
function my_service() {
    this.db_password="root_one";
    this.$get = function () {
        return this.db_password;
    };
};*/


app.service("my_service",my_service);
function my_service() {
    this.fun_one = function () {
        return "i am from service !";
    };
};

