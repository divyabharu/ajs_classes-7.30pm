var gulp = require("gulp");
var concat = require("gulp-concat");
var cssMinify = require("gulp-minify-css");
var htmlMinify = require("gulp-minify-html");
var uglify = require("gulp-uglify");

gulp.task("concat_css_minify",function () {
   gulp.src("./devEnvironment/css/*.css")
       .pipe(concat("final.min.css"))
       .pipe(cssMinify())
       .pipe(gulp.dest("./prodEnvironment/css"));
});

gulp.task("concat_html_minify",function () {
    gulp.src("./devEnvironment/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(htmlMinify())
        .pipe(gulp.dest("./prodEnvironment/html"));
});

gulp.task("concat_js_minify",function () {
    gulp.src("./devEnvironment/scripts/*.js")
        .pipe(concat("final.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./prodEnvironment/scripts"));
});


gulp.task("default",["concat_css_minify","concat_html_minify","concat_js_minify"],function () {

});