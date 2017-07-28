var gulp = require("gulp");
var bower = require("gulp-bower");
var open = require("gulp-open");

gulp.task("bower",function () {
    return bower();   //install bower
});

gulp.task("open",function () {
    gulp.src("./index.html")
        .pipe(open());
});

gulp.task("default",["bower","open"],function () {

});