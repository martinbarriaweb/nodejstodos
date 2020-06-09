
const argv = require('yargs')
.command('crear', 'Creando un elemento todo', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tarea'
    }
})
.command('actualizar', 'Actualiza un elemento todo', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tarea'
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: 'Descripcion de tarea',
        default: true
    }
})
.help()
.argv





module.exports = {
    argv
}