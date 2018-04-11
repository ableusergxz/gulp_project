

var gulp = require("gulp");
var uglify = require("gulp-uglify");//压缩文件
var rename =  require("gulp-rename");//重命名


gulp.task("default",function(){
    gulp.src("./src/js/main.js")
    .pipe(uglify())
    .pipe(rename("./paly/word.md"))
    .pipe(gulp.dest("./dist"))
})
