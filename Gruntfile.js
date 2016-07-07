
module.exports = function(grunt) {
 	
  grunt.initConfig({ 
    uglify: {
      target: {
        files: {
        'scripts/scripts.min.js': ['scripts/tiny.js','scripts/chico.js','scripts/app.js']
        }
      } //my_target
    } //uglify
    ,
    cssmin: {
	  options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	  },
	  target: {
		files: {
		  'styles/styles.min.css': ['styles/styles.css']
		}
	  }
    }
  });
    
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-compass');
};


/*
module.exports = function (grunt) {
 
    // configurable paths
    var yeomanConfig = {
        styles: 'styles',
        scripts: 'scripts'
      };
 
    grunt.initConfig({
        yeoman: yeomanConfig,
        uglify: {
            build: {
                src: [
                    yeomanConfig.scripts + '/tiny.js', // Bootstrap JS
                    yeomanConfig.scripts + '/chico.js', // All JS in the libs folder
                    yeomanConfig.scripts + '/app.js'  // This specific file
                ],
                dest: yeomanConfig.scripts + '/scripts.min.js',
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: yeomanConfig.styles + '/chico',
                    cssDir: yeomanConfig.styles + '/chicoCSS',
                }
            },
        }
    });
 
    // Where we tell Grunt we plan to use some plug-ins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
};
*/