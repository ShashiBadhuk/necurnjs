var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var gpClean = require('gulp-clean');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gpConcat = require('gulp-concat');
var gpminify = require('gulp-minify');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

/*
 * Application Build Task
 */

var Necurn = {
  jsFiles: [
    './src/necurn/N.index.js',
    './src/necurn/N.Application.js',
    './src/necurn/N.Component.js',
    './src/necurn/N.Controller.js',
    './src/necurn/N.Event.js',
    './src/necurn/N.Model.js',
    './src/necurn/N.Router.js',
    './src/necurn/N.Util.js',
    './src/necurn/N.View.js'
  ],
  cleanBuild: function() {
    return gulp.src('./build', { read: false })
      .pipe(gpClean({ force: true }));
  },
  build: function() {
    var that = this;
    gutil.log(gutil.colors.cyan('Creating Build'));
    //this.cleanBuild();
    this.buildHtml();
    this.buildStyles();
    this.buildImages();
    this.buildScripts();
    setTimeout(function() {
      that.buildScripts2();
    }, 3000);
  },
  buildHtml: function() {
    return gulp.src('./src/app/assets/index.html')
      .pipe(gulp.dest('./build/'))
      .pipe(reload({ "stream": true }));
  },
  buildStyles: function() {
    return gulp.src(['./src/app/assets/styles/**/*.css'])
      .pipe(gpConcat('index.min.css'))
      .pipe(cleanCSS())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./build/'))
      .pipe(reload({ "stream": true }));
  },
  buildImages: function() {
    return gulp.src(['./src/app/assets/images/**/*', './src/app/assets/icons/**/*'])
      .pipe(gulp.dest('./build/images/'));
  },
  buildScripts2: function() {
    var self = this;
    var options = {
      debug: true,
      browserifyOptions: {
        debug: true
      }
    };
    // set up the browserify instance on a task basis
    var b = browserify('./src/app/app.js', options);
    return b.bundle()
      .on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), 'Browserify is unable to create bundle. see below for more detail.');
        self.handleErrors(err);
      })
      .pipe(source('index.min.js'))
      .pipe(buffer())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify().on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
        this.emit('end');
      }))
      .pipe(gulp.dest('./build/'))
      .pipe(reload({ "stream": true }));
  },
  buildScripts: function() {

    var self = this;
    var options = {
      debug: true,
      standalone: 'beep-boop',
      browserifyOptions: {
        debug: true
      }
    };
    // set up the browserify instance on a task basis
    var b = browserify('./src/necurn/N.index.js', options);
    return b.bundle()
      .on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), 'Browserify is unable to create bundle. see below for more detail.');
        self.handleErrors(err);
      })
      .pipe(source('necurn.min.js'))
      .pipe(buffer())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify().on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
        this.emit('end');
      }))
      .pipe(gulp.dest('./lib/'))
      .pipe(reload({ "stream": true }));

  },
  watch: function() {
    var self = this;
    gulp.watch(self.jsFiles, function() {
      gutil.log(gutil.colors.cyan('Rebuild JS'));
      self.buildScripts();
    });

    gulp.watch(['./lib/necurn.min.js', './src/app/**/*.js'], function() {
      gutil.log(gutil.colors.cyan('Rebuild JS 2'));
      self.buildScripts2();
    });


    gulp.watch(['./src/app/assets/styles/**/*.css'], function() {
      gutil.log(gutil.colors.cyan('Rebuild CSS'));
      self.buildStyles();
    });
    gulp.watch(['./src/app/assets/images/**/*', './src/app/assets/icons/**/*'], function() {
      gutil.log(gutil.colors.cyan('Rebuild Images'));
      self.buildImages();
    });
    gulp.watch('./src/app/assets/*.html', function() {
      gutil.log(gutil.colors.cyan('Rebuild HTML'));
      self.buildHtml();
    });
  },
  //Callback for handling error while making bundle
  handleErrors: function() {
    var args = Array.prototype.slice.call(arguments);
    delete args[0].stream;
    gutil.log(gutil.colors.white(args));
  }
}

gulp.task('watch', function() {
  browserSync({
    server: './build',
    port: '3000',
    middleware: function(req, res, next) {
      return next();
    }
  });
  Necurn.watch();
});

gulp.task('build', function() {
  Necurn.build();
});

gulp.task('default', ['build', 'watch']);
