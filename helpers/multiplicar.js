const colors = require('colors');
const fs = require('fs');

const crearArchivo = async( base = 5, hasta, listar = false) =>{

    try {
        let salida ='';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {

            salida +=`${ base } x ${index} = ${ base * index }\n`;

            consola +=`${ base } ${ 'x'.green} ${index} ${ '='.green} ${ base * index }\n`;

        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        if (listar) {
            console.log('======================'.green);
            console.log( 'Tabla del: '.green, colors.blue( base) );
            console.log('======================'.green);
            console.log(consola);  
        }
        return `tabla-${ base }.txt`;

      
    } catch (error) {
        throw error;
    }
    
    
}

module.exports ={
    crearArchivo
}