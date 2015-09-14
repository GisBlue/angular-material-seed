module.exports = function( grunt ) {
    
    // Config.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        uglify: {
            options: {
                banner: '/* made by uglify */\n'
            },
            build: {
                src: ['js/*.js'],
                dest: 'js/<%= pkg.name %>.min.js'
            }
        }        
        
    } );
    
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    
    grunt.registerTask( 'default', ['uglify'] );
    
    
}