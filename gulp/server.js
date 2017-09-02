import gulp from 'gulp';
import webserver from 'gulp-webserver';
import opt from './options';

gulp.task('server', () => {
  gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        port: 3000,
        open: true
      })
    );
});