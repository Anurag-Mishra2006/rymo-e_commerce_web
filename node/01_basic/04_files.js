const fs = require('fs');

//  reading files
//  asynchorous order
// fs.readFile('./basic/docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// });
// console.log("last line")


//  synchoronous order
// const read = fs.readFileSync('./basic/docs/blog1.txt','utf-8')
// console.log(read)
// console.log("This above code is ex of synchorous order")

//  writing files

fs.writeFile('./basic/docs/blog2.txt' ,'Hello world',()=>{
    console.log('file was written')
} ) // if file is not find it create


//  directories
if(! fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })

}
//  deleting the folder

else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
        
    })
}

//  deleting the files
if(fs.existsSync('./basic/docs/deleteme.txt')){
    fs.unlink('./basic/docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted")
    })
}