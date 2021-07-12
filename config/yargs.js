const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: 'es la base por la cual se va a multiplicar'

    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'rango de numeros para multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)){
            throw 'la base tiene que ser un numero';
        }
        return true;

    })   
    .argv

module.exports = argv;