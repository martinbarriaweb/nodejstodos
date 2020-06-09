const fs = require('fs');
const colors = require('colors');

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

const getList = () => {
    const list = require('../db/db.json');
    list.forEach(element => {
        console.log('=======POR HACER======'.green);
        console.log(element.descripcion.red);
        console.log(`Estado: `, element.completado);
   });
}

module.exports = {
    crear,
    getList
}