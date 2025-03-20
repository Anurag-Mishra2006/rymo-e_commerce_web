// const xyz = require("./03_people") // this is returning empty object until we export the people in people.js

// console.log(xyz)
const {people,age} = require("./03_people")  // destructing 
console.log(typeof people)
console.log(people)
console.log(age)


const os = require('os');
console.log(os.platform(),os.homedir())
console.log(os.version())
