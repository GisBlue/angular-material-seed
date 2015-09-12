module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['js/*.js', 'pages/**/*.js'],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['index.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        src: ['css/**', 'lib/**', 'pages/**'],
                        dest: 'build'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['**'],
                tasks: ['mytask'],
                options: {
                    spawn: false,
                }
            }
        }
        
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('mytask', ['uglify','copy']);
    grunt.registerTask('default', ['watch']);

};