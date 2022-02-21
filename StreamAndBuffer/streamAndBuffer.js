const fs = require("fs")

//Read Stream
const readStream = fs.createReadStream('read.txt');
readStream.on('data', chunk =>{
    console.log(chunk.toString())
})

const readStream2 = fs.createReadStream('read.txt',{encoding:'utf-8'});
readStream2.on('data', chunk =>{
    console.log(chunk.toString())
})

//Write Stream
const writeStream = fs.createWriteStream('write.txt');
writeStream.write('New Stream Text')

readStream.on('data', chunk =>{
    writeStream.write('\n' + chunk.toString())
})

//Pip Stream Directly copy text from read to write file
readStream.pipe(writeStream)