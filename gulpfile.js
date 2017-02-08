var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('build-less', function(){
  return gulp.src('styles/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('styles/css'));
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.less', ['build-less']);
});

// gulp.task('default', ['serve']);
