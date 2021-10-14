const fs = require('fs');

let funcionesTareas = {
    archivo: './tareas.json',

    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))

    },

    escribirJSON: function (tareas) {

        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },

    guardarTarea: function (tarea) {

        let tareas = this.leerJSON()
        tareas.push(tarea)
        this.escribirJSON(tareas)
    },

    leerPorEstado: function (estado) {


        let tareas = this.leerJSON();

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });

        return tareasFiltradas;
    }



}



module.exports = funcionesTareas