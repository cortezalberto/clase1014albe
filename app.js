// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

let archivoTareas = require('./funcionesTareas');

let accion = process.argv[2];

let tareas = [];

switch(accion) {
    case 'listar':
        console.log();    
        console.log('Listado de tareas');
        console.log('----------------');


        tareas = archivoTareas.leerJSON();
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' -> ' + tareas[i].estado);
        // }

        // Micro desafío
        // Armar la función de más arriba como array.forEach()
        // Seguramente no implementen el index. Atajarlo.

        tareas.forEach((tarea, index) => {
            console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
        });

        console.log()
        break;

    // Micro desafío 2.C
    // ---------------
    // Escribir el caso de crear tarea
    // Tener en cuenta que va a llegar el nombre de la tarea como segundo argumento
    // Tener en cuenta que la tarea se crea en esto "pendiente"


    case 'crear':
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        archivoTareas.guardarTarea(tarea);

        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log()
        break;    


    // Micro desafío 3
    
    case 'filtrar':

        let estado = process.argv[3];

        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');
        
        
        let filtradas = archivoTareas.leerPorEstado(estado);
        
        filtradas.forEach((tarea) => {
            console.log(tarea.titulo)
        });

        break;

    case undefined:
        console.log('Tenés que pasarme una acción por favor');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}
