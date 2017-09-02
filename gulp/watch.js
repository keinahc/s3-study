import gulp from 'gulp';
import opt from './options';


gulp.task('watch', ['build', 'server'], () => {
  gulp.watch(`${opt.srcDir.sass}/**/*.scss`, ['build']);
});