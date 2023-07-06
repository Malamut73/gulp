const css = () => {
    return $.gulp.src($.path.css.src, $.app.sourcemaps)
        .pipe($.gp.concat('style.css'))
        .pipe($.gp.cssimport())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gulp.dest($.path.css.dest, $.app.sourcemaps))
        .pipe($.gp.rename({ suffix: '.min'}))
        .pipe($.gp.csso())
        .pipe($.gulp.dest($.path.css.dest, $.app.sourcemaps))
}

module.exports = css;