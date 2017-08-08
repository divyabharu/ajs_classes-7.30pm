var gulp = require("gulp");
var bower = require("gulp-bower");
var open = require("gulp-open");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var htmlMinify = require("gulp-minify-html");
var cssMinify = require("gulp-minify-css");


gulp.task("open",function () {
   gulp.src("./devEnv/index.html")
       .pipe(open());
});


gulp.task("bower",function () {
    return bower();
});

gulp.task("minify_js",function () {
   gulp.src("./devEnv/js/*.js")
       .pipe(concat("final.min.js"))
       .pipe(uglify())
       .pipe(gulp.dest("./prodEnv/js"));
});


gulp.task("minify_html",function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(htmlMinify())
        .pipe(gulp.dest("./prodEnv/html"));
});

gulp.task("minify_css",function () {
    gulp.src("./devEnv/css/*.css")
        .pipe(concat("final.min.css"))
        .pipe(cssMinify())
        .pipe(gulp.dest("./prodEnv/css"));
});


gulp.task("default", ["minify_css","minify_html","minify_js","bower","open"],function () {

});