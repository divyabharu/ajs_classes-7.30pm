//import modules
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var minifyHTML = require("gulp-minify-html");
var minifyCSS = require("gulp-minify-css");
var bower = require("gulp-bower");


//create the task.
gulp.task("task_one" , function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(minifyHTML())
        .pipe(gulp.dest("./prodEnv/html"));
});


