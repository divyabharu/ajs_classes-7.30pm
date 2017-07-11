app.service("my_service",my_service);
function my_service() {
    this.fun_one = function () {
        return "Data From ORM with NodeJS...";
    };

    this.fun_two = function () {
        return "Data from Cassandra DB....";
    };
};