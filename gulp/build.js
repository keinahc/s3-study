import gulp from 'gulp';
import sass from 'gulp-sass';
import shell from 'gulp-shell';

import opt from './options';


gulp.task('build', ['dest']);

gulp.task('dest', ['compile'], () => {
  gulp.src(`${opt.srcDir.root}/index.html`)
    .pipe(gulp.dest(`${opt.destDir.root}/`));
});

gulp.task('compile', ['clean'], () => {
  gulp.src(`${opt.srcDir.sass}/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(opt.destDir.css));
});

// gulp.task('dest', ['clean'], () => {
//   gulp.src(`${opt.srcDir.root}/**/*`)
//     .pipe(gulp.dest(opt.destDir.root));
// });

gulp.task('clean', shell.task([`rm -rf ${opt.dirName.dest}`]));
