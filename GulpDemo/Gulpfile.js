var gulp = require("gulp");
var concat = require("gulp-concat");
var htmlMinify = require("gulp-minify-html");

gulp.task("task_one",function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(htmlMinify())
        .pipe(gulp.dest("./prodEnv/html"));
});