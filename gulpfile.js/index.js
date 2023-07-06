global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(), 

    path: require('./config/path.js'),
    app: require('./config/app.js'),
}

const requireDir = require('require-dir');
const task = requireDir('./task', {recurse: true});

const watcher = () => {
    $.gulp.watch($.path.html.watch, task.html).on("all", $.browserSync.reload);
    $.gulp.watch($.path.scss.watch, task.scss).on("all", $.browserSync.reload);
    $.gulp.watch($.path.js.watch, task.js).on("all", $.browserSync.reload);
    $.gulp.watch($.path.img.watch, task.img).on("all", $.browserSync.reload);
    $.gulp.watch($.path.font.watch, task.font).on("all", $.browserSync.reload);
    $.gulp.watch($.path.other.watch, task.other).on("all", $.browserSync.reload);
}

const build = $.gulp.series(
    task.clear, 
    $.gulp.parallel(task.js, task.scss, task.html, task.img, task.font, task.other), 
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
);

exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.other = task.other;

exports.default = $.app.isProd ? build : dev;

// Task for gulp-fonter for linux
exports.fonterPath = task.fonterPath;

