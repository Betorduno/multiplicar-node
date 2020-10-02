const fs = require('fs');

let listaTabla = (base, limite)=> {
  return new Promise ((resolve, reject) => {
    let data = '';
    if(!Number(base)&& !Number(limite)){
      reject(`El valor introducido ${base} o el limite ${ limite } no es un numero`);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }
    resolve( data )
    
  })
}

let crearArchivo =  (base, limite) =>{
  return new Promise ((resolve, reject) => {
    let data = '';
    if(!Number(base)){
      reject(`El valor introducido ${base} no es un numero`);
      return;
    } 
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
      
    }
    
    fs.writeFile(`tablas/tablas-${base}.txt`, data, (err) => {
      if (err)
        reject (err)
      else
        resolve(`tabla-${base}.txt`) 
    });
  })
} 

module.exports = {
  crearArchivo,
  listaTabla
}