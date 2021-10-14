
// todas las funcionalidades
let archivoTareas = require('./funcionesTareas')

// Para controlar el switch
let accion = process.argv[2]

// Un array para lojar las tareas que vienen del archivo JSON
let tareas = [];

switch(accion) {
    case 'listar':
        // Hago el foreach
        break;

    // Micro desafío 2.C
    // ---------------
    // Escribir el caso de crear tarea
    // Tener en cuenta que va a llegar el nombre de la tarea como segundo argumento
    // Tener en cuenta que la tarea se crea en esto "pendiente"


    case 'crear':
         // Recibo el titulo como argumento de la consola

        let titulo = process.argv[3];
        // Creo una variable tarea
      
        break;    


    // Micro desafío 3
    
    case 'filtrar':
    // Recibo el estado a buscar como argumento de la consola
        let estado = process.argv[3];

    // Busco por el estado y filtro

        break;

    case undefined:
        console.log('Tenés que pasarme una acción por favor');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}

console.log('terminó el programa');
