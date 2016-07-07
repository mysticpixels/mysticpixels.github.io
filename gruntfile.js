module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // adding a neat banner to the top of the source files
    tag: {
      banner: '/*\n' +
              ' Hello world ' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    // setting up folder structure pointers
    project: {
      dev: 'dev',
      // build: 'build',
      devcss: '<%= project.dev %>/css',
      devscss: '<%= project.dev %>/scss',
      devjs: '<%= project.dev %>/js',
      // buildcss: '<%= project.build %>/css',
      // buildjs: '<%= project.build %>/js'
    },

    // converting scss files to css and saving to relevant folders
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          // banner: '<%= tag.banner %>'
          // compass: true
        },
        files: {
          '<%= project.devcss %>/ranjithkumarr.css': '<%= project.devscss %>/ranjithkumarr.scss'
        }
      }
    },

    // watching the scss files
    watch: {
      sass: {
        files: ['<%= project.devscss %>/{,*/}*.{scss,sass}'],
        tasks: ['sass:dev'],
        option: {
          livereload: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-banner');
  

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};