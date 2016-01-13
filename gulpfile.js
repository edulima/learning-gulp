var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es     = require('event-stream');
var clean  = require('gulp-clean');

gulp.task('delete', function () {
  return gulp.src('dist', {read: false})
  .pipe(clean());
});

gulp.task('scripts', function() {

  var javascriptFromCoffeeScript = gulp.src('src/*.coffee').pipe(coffee())
  var js = gulp.src('src/*.js');

  return es.merge(javascriptFromCoffeeScript, js)
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.{js,coffee}', ['scripts']);
})
