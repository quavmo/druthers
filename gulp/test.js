import gulp from 'gulp';

import Reporter from 'jasmine-terminal-reporter';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

let testCode    = 'test/**/*';
let sourceCode  = 'src/**/*.js';

gulp.task('test', function() {
   let testPipe = gulp.src(testCode);
   let notifier = { specDone: function(result) { console.log('this could be a notification'); } };

   return testPipe.pipe($.jasmine({reporter: [new Reporter(), notifier]}));
});

gulp.task('watch-test', function () {
  return gulp.watch([testCode, sourceCode], ['test']);
})
