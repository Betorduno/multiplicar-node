
const opts ={
  base: {
    alias: 'b',
    demand: true
  },
  limite: {
    alias: 'l',
    default: 10
  }
}
const argv = require('yargs')
  .command('listar','Tablas de multiplicar',opts)
  .command( 'crear', 'Crea una tabla de multiplicar',opts)
  .help().argv;

module.exports = {
  argv
}