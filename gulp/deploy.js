import gulp from 'gulp';
import awspublish from 'gulp-awspublish';
import opt from './options';
import shell from 'gulp-shell';


gulp.task('deploy', ['wait'], () => {
  let publisher = awspublish.create({
    "params": {
      "Bucket": "s3website-study"
    },
    "endpoint": "s3-ap-northeast-1.amazonaws.com"
  });

  gulp.src(`${opt.destDir.root}/**/*`)
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});

gulp.task('wait', ['build'], shell.task(['sleep 5']));
