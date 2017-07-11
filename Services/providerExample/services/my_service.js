app.provider("my_service",my_service);
function my_service() {
    this.db_password="root_one";
    this.$get = function () {
        return this.db_password;
    };
};