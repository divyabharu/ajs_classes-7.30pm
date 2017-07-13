var gulp = require("gulp");
var concat = require("gulp-concat");
var htmlMinify = require("gulp-minify-html");
var cssMinify = require("gulp-minify-css");
var uglify = require("gulp-uglify");

gulp.task("minify_html",function()
{
    gulp.src("./devenv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(htmlMinify())
        .pipe(gulp.dest("./prodEnv/html"));
});

gulp.task("minify_css",function () {
    gulp.src("./devenv/css/*.css")
        .pipe(concat("final.min.css"))
        .pipe(cssMinify())
        .pipe(gulp.dest("./prodEnv/css"));

});
gulp.task("minify_js",function () {
    gulp.src("./devenv/js/*.js")
        .pipe(concat("final.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./prodEnv/js"));

});

gulp.task("default",["minify_html","minify_css","minify_js"],function () {
    gulp.watch("./devenv/html/*.html" , function () {
       gulp.run("minify_html")
    });

    gulp.watch("./devenv/css/*.css",function () {
       gulp.run("minify_css");
    });

    gulp.watch("./devenv/js/*.js",function () {
       gulp.run("minify_js");
    });
});