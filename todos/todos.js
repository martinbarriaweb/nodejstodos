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

const getData = () => {
    try {
        listToDo = require('../db/db.json');
    } catch (error) {
        listToDo = [];
    }
}

const crear = (descripcion) => {

    getData();

    let toDo = {
        descripcion,
        completado: false
    }
    console.log(`Tarea creada: `.yellow, toDo.descripcion.green);
    
    listToDo.push(toDo);
    saveDB();
    return listToDo;
}

const getList = () => {
    const list = require('../db/db.json');
    list.forEach(element => {
        console.log('=======POR HACER======'.green);
        console.log(element.descripcion.blue);
        console.log(`Estado: `, element.completado);
   });
}

const update = (descripcion, completado = true) => {
    getData();
    let index = listToDo.findIndex( task => task.descripcion === descripcion);
    if(index >= 0) {
        listToDo[index].completado = completado;
        console.log(`Se actualizó: `.yellow, descripcion.green);
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (descripcion) => {
    getData();
    let newListToDo = listToDo.filter( task => task.descripcion !== descripcion);
    if(listToDo.length === newListToDo.length){
        return false;
    } else {
        console.log(`Se ha eliminado: `.red, descripcion.green);
        listToDo = newListToDo;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    getList,
    update,
    deleteTask
}