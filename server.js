//node js vs js
//node runs on a server not in the browser
//backend
//console is the terminal window
//type node in terminal (cntrl c to exit)

console.log("hello world")

//global object instead of window object

//console.log(global);

//common core modules (operating system, file system, other things for server)
//common js modules instead of Es6 modules

//imports
const os = require('os')
const path = require('path')

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

//object with the filename info
console.log(path.parse(__filename))
*/

//can pull in packages
//can make own modules

//const math = require('./math')
//console.log(math.add(2,3))

const {add, subtract, multiply, divide} = require('./math')
console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))


