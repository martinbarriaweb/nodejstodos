const fs = require('fs');

let listToDo = [];

let saveDB = () => {

    let data = JSON.stringify(listToDo);

    console.log(data);
    
    fs.writeFile('./db/db.json', data, (err)=>{
        if(err){
            throw new Error('No se pudo grabar la tarea', err)
        }
    });

}


const crear = (descripcion) => {

    let toDo = {
        descripcion,
        completado: false
    }

    listToDo.push(toDo);
    saveDB();
    return toDo;
}

module.exports = {
    crear
}