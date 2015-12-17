import gulp from 'gulp';
import Reporter from 'jasmine-terminal-reporter';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const testCode = 'test/**/*';
const sourceCode = 'src/**/*.js';
const notifier = {
  specDone: function(result) {
    console.log('this could be a notification');
  }
};

gulp.task('test', function() {
  // gulp-jasmine works on filepaths so you can't have any plugins before it
  return gulp.src(testCode).pipe($.jasmine({
    reporter: [new Reporter(), notifier]
  }));
});

gulp.task('watch-test', function() {
  return gulp.watch([testCode, sourceCode], ['test']);
})
