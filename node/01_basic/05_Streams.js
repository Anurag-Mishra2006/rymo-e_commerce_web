// start using data , before it has finished loading
const fs = require('fs')

const readStream = fs.createReadStream('./basic/docs/blog3.txt' , {encoding:'utf-8'})

//  this readstream is like the eventlistener , here we are listening to a data event on this read stream and that is basically every time we receive a buffer of data

readStream.on('data',(chunk)=>{
    console.log("------ NEW CHUNK -------")
    console.log(chunk) //
    // console.log(chunk.toString()) // when we add encoding : 'utf-8' it will encode the buffer in string

})
const writestream = fs.createWriteStream('./basic/docs/blog4.txt')

// readStream.on('data',(chunk)=>{
//     // console.log("------ NEW CHUNK -------")
//     // console.log(chunk) ;
//     writestream.write('\nNEW CHUNK\n')
//     writestream.write(chunk); // this write the chunk in file blog4
// })

// piping
readStream.pipe(writestream); // everything whatever written in readstream will write in writestream