var gulp = require('gulp')
var minifycss = require('gulp-clean-css')
var sass = require("gulp-sass")

gulp.task("minify",function(){
    return gulp.src('src/sass/style.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
})

gulp.task("sass",function(){
    return gulp.src("src/sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
})


gulp.task("default",function(){
    gulp.watch("src/sass/*.scss",gulp.series("sass"))
})
