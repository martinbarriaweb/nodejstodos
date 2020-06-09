const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch(comando) {

    case 'crear':
        console.log('Crear TODO');
        break;

    case 'listar':
        console.log('Listar TODO');
        break;
    case 'actualizar':
        console.log('Actualizar TODO');
        break;
    default:
        console.log('Comando no reconocido');
        

}



