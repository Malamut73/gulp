const webpack = require('webpack-stream')

const js = () => {
    return $.gulp.src([$.path.js.src, 
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js'
        ], $.app.sourcemaps)
        .pipe($.gp.babel())
        .pipe(webpack({
            mode: $.app.webpack.mode,
            output: $.app.webpack.output
        }))        
        .pipe($.gulp.dest($.path.js.dest, $.app.sourcemaps))
}

module.exports = js;


