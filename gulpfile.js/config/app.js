const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    sourcemaps: {
        sourcemaps: isDev
    },

    webpack: {
        mode: isProd ? 'production' : 'development',

        output: {
            filename: 'index.min.js'
        }
    },
    
    imagemin:{
        verbose: true
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}      
