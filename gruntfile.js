module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //configuração do less
        less: {
            //development para que possamos criar config diferentes a partida da onde o grunt é executado
            development: {
                files: {
                    //Compilando o LESS, primeiro arquivo de destino : depois arquivos de origem
                    'main.css': 'main.less'
                }
            }
        },
        //configuração do uglify
        uglify: {
            target: {
                files: {
                    //Comprimindo JavaScript, primeiro arquivo de destino : depois arquivos de origem
                    'dist/scripts/main.min.js': 'main.js'
                }
            }
        }
    })

    // Carregando os plugins
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify']) 
}