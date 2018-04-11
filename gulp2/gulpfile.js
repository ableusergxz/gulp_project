var gulp = require("gulp");
var uglify = require("gulp-uglify");//压缩文件
var rename =  require("gulp-rename");//重命名
var concat = require("gulp-concat");//文件合并
var minifyCss = require("gulp-minify-css");//压缩css
var less = require("gulp-less");//编译less
var minifyHtml = require("gulp-minify-html");//压缩html
var imagemin = require("gulp-imagemin");//压缩图片
//js
gulp.task("jsTask",function(){
    gulp.src(['./src/main.js','./src/js/*.js'])
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest("./dist/js"))
})
//css
gulp.task("cssTask",function(){
    gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(minifyCss())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest("./dist/css"))
})
//html
gulp.task("htmlTask",function(){
    gulp.src('./src/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest("./dist"))
})
//img
gulp.task("imgTask",function(){
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"))
})
gulp.task("default",["jsTask","cssTask","htmlTask","imgTask"],function(){
    console.log("默认执行任务！")
})
