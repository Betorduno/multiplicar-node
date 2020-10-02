const { argv } = require('./config/yarg')

const { crearArchivo, listaTabla } = require('./multiplicar/multiplica');

let comando = argv._[0]
console.log(comando);

switch (comando) {
  case 'listar':
    listaTabla(argv.base, argv.limite)
    .then((tabla)=> console.log(tabla))
    .catch((err)=>console.log(err))
  break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo=> console.log(`El archivo fue creado exitosamente, ${archivo} `))
      .catch((err)=> console.log(err))
  break;

  default:
    console.log('El comando ingresado no se encontró');
    break;
}


// crearArchivo(base)
//   .then(archivo=> console.log(`El archivo fue creado exitosamente, ${archivo} `))
//   .catch((err)=> console.log(err))

// console.log(process.argv);
// console.log(argv.base);
// console.log(argv);


// let argv2 = process.argv
// let param = argv[2];
// let base = param.split('=')[1]

// console.log(argv);
// console.log(argv2);
