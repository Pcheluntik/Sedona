const gulp = require("gulp");
const sass = require('gulp-sass');


gulp.task('sass', function (done) {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
    done();
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
});
