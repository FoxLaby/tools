var gulp = require('gulp');

// Move font-awesome fonts folder to css compiled folder
gulp.task('fontawesome', function() {
    return gulp.src('./bower_components/components-font-awesome/css/**.*').pipe(gulp.dest('./assets/font-awesome/css'));
    return gulp.src('./bower_components/components-font-awesome/webfonts/**.*').pipe(gulp.dest('./assets/font-awesome/webfonts'));
});