const fs = require('fs');

let archivoTareas = {
    archivo: './tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    
    // Micro desafío 2.A - Escritir la tarea en el archivo JSON
    // ---------------
    // 1. Escribir el método escribirJSON que recibirá un array de tareas
    // 2. Utilizar el método JSON.stringify() para trasformar el array a formato JSON
    // 3. Utilizar el método de fs.writeFileSync() para escribir el JSON en el archivo.
    escribirJSON: function (tareas) {
        
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
     
    // Micro desafío 2.B - Escribir la tarea en el archivo JSON
    // ---------------
    // 1. ...
    // 2. ...
    // 3. ...
    guardarTarea(tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },

    // Micro desafío 3, aplicar filter para traer solo las tareas pendientes
    leerPorEstado(estado) {
        let tareas = this.leerJSON();

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });  

        return tareasFiltradas;
    }
}

module.exports = archivoTareas;