import requireDir from 'require-dir';
import gulp from 'gulp';

requireDir('./gulp', { recurse: true });

gulp.task('default', ['watch', 'serve']);

gulp.task('watch', ['watch-style', 'watch-image', 'watch-web', 'watch-script', 'test-console-watch', 'test-browser']);
gulp.task('build', ['style', 'image', 'web', 'script']);
