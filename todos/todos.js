const fs = require('fs');

let listToDo = [];

let saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('./db/db.json', data, (err)=>{
        if(err){
            throw new Error('No se pudo grabar la tarea', err)
        }
    });
}

const upData = () => {
    try {
        listToDo = require('../db/db.json');
    } catch (error) {
        listToDo = [];
    }
}

const crear = (descripcion) => {

    upData();

    let toDo = {
        descripcion,
        completado: false
    }

    listToDo.push(toDo);
    saveDB();
    return listToDo;
}

module.exports = {
    crear
}