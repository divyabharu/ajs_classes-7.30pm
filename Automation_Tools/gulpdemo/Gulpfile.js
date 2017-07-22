var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifyHTML = require("gulp-minify-html");
var minifyCSS = require("gulp-minify-css");
var bower = require("gulp-bower");

gulp.task("task_one",function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(minifyHTML())
        .pipe(gulp.dest("./prodEnv/html"));
});

gulp.task("task_two",function () {
    gulp.src("./devEnv/css/*.css")
        .pipe(concat("final.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest("./prodEnv/css"));
});

gulp.task("task_three", function () {
   gulp.src("./devEnv/js/*.js")
       .pipe(concat("final.min.js"))
       .pipe(uglify())
       .pipe(gulp.dest("./prodEnv/js"))
});

gulp.task("task_four",function () {
   return bower();
});

gulp.task("default",["task_one","task_two","task_three","task_four"],function () {

});


