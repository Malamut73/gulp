const sass = require('gulp-sass')(require('sass'))

const scss = () => {
    return $.gulp.src($.path.scss.src, $.app.sourcemaps)
        .pipe(sass())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.groupCssMediaQueries())
        // .pipe($.gulp.dest($.path.scss.dest, $.app.sourcemaps))
        .pipe($.gp.rename({ suffix: '.min'}))
        .pipe($.gp.csso())
        .pipe($.gulp.dest($.path.scss.dest, $.app.sourcemaps))
}

module.exports = scss;