const pathSrc = './src';
const pathDest = './public';


module.exports = {
    root: pathDest,

    html:{
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    css:{
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },

    scss:{
        src: pathSrc + '/scss/*.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: pathDest + '/scss'
    },

    js:{
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img:{
        src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/img'
    },

    font:{
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/font'
    },
    other:{
        src: pathSrc + '/other/**/*',
        watch: pathSrc + '/other/**/*',
        dest: pathDest
    },

}
