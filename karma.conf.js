module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ["jasmine", "browserify"],
    autoWatch: true,
    browsers: ["PhantomJS"],
    preprocessors: {
      "test/js/**/*.js": ["browserify"],
      "src/js/**/*.js": ["browserify"]
    },
    files: ["test/js/**/*.js"],
    browserify: {
      debug: true
    }
 });
}

