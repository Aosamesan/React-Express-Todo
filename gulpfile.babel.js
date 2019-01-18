import gulp from 'gulp'
import babel from 'gulp-babel'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config'


const copyBootstrapScripts = () => {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.*',
        './node_modules/popper.js/dist/umd/popper.min.js*',
        './node_modules/bootstrap/dist/js/bootstrap.min.js*'
    ]).pipe(gulp.dest('./public/js'))
}

const copyBootstrapStyles = () => {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css*')
        .pipe(gulp.dest('./public/css'))
}

gulp.task('copyBootstrapResources', gulp.parallel(copyBootstrapScripts, copyBootstrapStyles))

const transpileReact = () => {
    return gulp.src('./src/client/**/*.js')
    .pipe(babel({
        presets: [
            "@babel/preset-env", "@babel/preset-react"
        ]
    }))
    .pipe(gulp.dest('./transpiled'))
}

const webpackReact = () => {
    return gulp.src('./transpiled/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/js'))
}

gulp.task('webpackReact', gulp.series(transpileReact, webpackReact))