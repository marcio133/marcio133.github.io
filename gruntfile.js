module.exports = function(grunt) {
  // var mozjpeg = require('imagemin-mozjpeg');
      // 1. All configuration goes here 
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          
          imagemin: {
            options: {
              optimizationLevel: 7,
              //  use: [ mozjpeg() ]
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img-src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        watch: {
          images: {
            files: ['img-src/*.{png,jpg,gif}' ],
            tasks: ['imagemin'],
            options: {
            spawn: false,
            }
          },
          livereload: {
            options: {
              livereload: true
            },
            files: [
              '*.html',
              'css/style.min.css',
              // 'scss/*.scss',
              'img/{,*/}*'
            ],
          }
        }
  
      });
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.registerTask('default', ['watch']);
  
  };