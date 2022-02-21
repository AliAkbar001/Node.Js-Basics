const fs = require('fs')
//read File
fs.readFile('read.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log(data.toString())
    }
})
//Read Nested File
fs.readFile('./read_folder/read.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log(data.toString())
    }
})

//Write File
fs.writeFile('write.txt','A New Message',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("A New Message Created")
    }
})

//Append File
fs.appendFile('write.txt','A New Message 2',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Second Message Created")
    }
})

//Append text on new line
fs.appendFile('write.txt','\nA New Message 3',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Third Message Created")
    }
})

//Create New Folder 
fs.mkdir('new_folder',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("New Folder Created")
    }
})

//Create Folder If its not exit
if(!fs.existsSync('new_folder')){
    fs.mkdir('new_folder',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("New Folder Created")
        }
    })
}else{
    console.log("Folder Already Exit")
}

//Delete Folder OR File
if(fs.existsSync('new_folder')){
    fs.rmdir('new_folder',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Folder Is Delete")
        }
    })
}else{
    console.log("Folder Is Not Exit")
}