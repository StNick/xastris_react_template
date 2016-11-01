var gulp = require("gulp");
var gls = require("gulp-live-server");
var babel = require("gulp-babel");

gulp.task("serve", ['transpile'], function(){
    var server = gls.static('app', 3000);
    server.start();
    
    gulp.watch('app/**/*.jsx', ['transpile']);

    gulp.watch(['app/**/*.css', 'app/**/*.js', 'app/**/*.html'], function (file) {
      server.notify.apply(server, [file]);
    });    
})

gulp.task("transpile", function () {
  return gulp.src("app/script/*.jsx")
    .pipe(babel())
    .pipe(gulp.dest("app/script/"));
});