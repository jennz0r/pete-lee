module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Project configuration.
    grunt.initConfig({
        handlebars: {
            all: {
                files: {
                    "handlebars/handlebars-templates.js": ["**/*.hbs"]
                }
            }
        }
    });
};



