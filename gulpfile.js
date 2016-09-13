
var gulp     = require('gulp');
var sass     = require('gulp-sass');
var jetpack  = require('fs-jetpack');

var appDir   = jetpack.cwd('app');
var buildDir = jetpack.cwd('build');


gulp.task('build', ['copy', 'sass', 'scss'], function () {
    return;
});

gulp.task('copy', ['clean'], function () {
    return appDir.copy('.', buildDir.path(), {
        matching: [ 'html/**'
                  , 'js/**'
                  , 'css/**'
                  , 'img/**'
                  , 'main.js'
                  , 'package.json'
                  ]
    });
});

gulp.task('clean', function () {
    return buildDir.remove();
});


gulp.task('scss', function () {
    return gulp.src(appDir.path('sass/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildDir.path('css')));
});

gulp.task('sass', function () {
    return gulp.src(appDir.path('sass/**/*.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildDir.path('css')));
});
