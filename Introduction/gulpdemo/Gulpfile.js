//import all modules
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyHTML = require("gulp-minify-html");
var minifyCSS = require("gulp-minify-css");
var concat = require("gulp-concat");
var bower = require("gulp-bower");
var open = require("gulp-open");


//create js task
gulp.task("js_minify", function () {
    gulp.src("./devEnv/js/*.js")
        .pipe(concat("final.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./prodEnv/js"));
});



//create the css task
gulp.task("minify_css",function () {
   gulp.src("./devEnv/css/*.css")
       .pipe(concat("final.min.css"))
       .pipe(minifyCSS())
       .pipe(gulp.dest("./prodEnv/css"));
});

//create the html task
gulp.task("minify_html",function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(minifyHTML())
        .pipe(gulp.dest("./prodEnv/html"));
});


//create the bower task
gulp.task("bower",function () {
    return bower();     //bower install
});

//launch html page
gulp.task("open",function () {
    gulp.src("./index.html")
        .pipe(open());
});


//create the default task
gulp.task("default",["js_minify","minify_css","minify_html","bower","open"],function () {

});



























