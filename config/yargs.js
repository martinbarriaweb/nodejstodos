

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Descripcion de tarea',
    default: true
}

const argv = require('yargs')
.command('crear', 'Creando un elemento todo', {
    descripcion
})
.command('delete', 'Eliminar Todo', {
    descripcion
})
.command('update', 'Actualiza un elemento todo', {
    descripcion,
    completado
})
.help()
.argv


module.exports = {
    argv
}