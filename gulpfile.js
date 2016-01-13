var gulp = require("gulp");
var del = require("del");
var browserSync = require('browser-sync');
var gutil = require("gulp-util");
var browserify = require('browserify');
var reload = browserSync.reload;
var jade = require("gulp-jade");
var source = require('vinyl-source-stream');

var conf = {
    jade : {
      pretty : true
    },
    src : {
      app: "./src/js/app.js",
      jade: "./src/jade/**/*.jade"
    },
    dest : {
      base: "./dist",
      html: "./dist",
      js: "./dist/js"
    }
}

errorHandler = function(err) {
  var message = typeof err.annotated !== "undefined"
    ? "Error: " + err.annotated 
    : err;
  gutil.log(gutil.colors.red(message));
  this.emit("end");
};

gulp.task("jade", function() {
  return gulp.src(conf.src.jade)
    .pipe(jade(conf.jade))
    .on("error", errorHandler)
    .pipe(gulp.dest(conf.dest.html))
    .pipe(reload({ stream: true }));
});

gulp.task("serve", function() {
    browserSync({
      server: {
        baseDir: conf.dest.base
      }
    });

    gulp.watch(conf.src.jade, ["jade"]);
});

gulp.task("browserify",function() {
  return browserify(conf.src.app)
    .bundle()
    .on("error", errorHandler)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(conf.dest.js))
    .pipe(reload({ stream: true }));
});

gulp.task("default", ["browserify", "jade", "serve"], function(done) {
  done();
});

gulp.task("clean", function() {
    return del([conf.dest.base]);
});
