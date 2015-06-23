'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var reload = 21021;

  var tasks = {

    clean: {
      out: "out"
    },

    aglio: {
      options: {
        theme: "default"
      },
      pdg: {
        files: {
          "out/index.html": ["Readme.md"]
        }
      }
    },

    copy: {
      images: {
        expand: true,
        src: ["images/**.png"],
        dest: "out/"
      }
    },

    connect: {
      options: {
        port: "7800",
        hostname: "localhost",
        livereload: reload
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect, options) {
            return [connect.static("out/")];
          }
        }
      }
    },

    watch: {
      options: {
        livereload: reload
      },
      pdg: {
        files: ["Readme.md"],
        tasks: ["aglio"]
      },
      images: {
        files: ["images/**.png"],
        tasks: ["copy:images"]
      },
      livereload: {
        files: ["out/index.html"]
      }
    }
  };

  grunt.initConfig(tasks);
  grunt.registerTask(
    "default",
    [
      "clean",
      "aglio",
      "copy",
      "connect",
      "watch"
    ]);
};
