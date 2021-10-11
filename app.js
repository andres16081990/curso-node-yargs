' use strict '
console.clear();

const {createFile} = require('./helpers/multiply.js')
const argv = require('./config/yargs')
// console.clear();
// const [,,arg3 = 'number = 4'] = process.argv;
// const [,number = 5] = arg3.split('=');

//const number = 40;
createFile(argv.n, argv.l)  
   .then(fileName => console.log(fileName,'created'))
   .catch(err=>console.log(err));
