const http = require('http')
const hostname = 'localhost'
const port = 3000
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log('Request', req);
    console.log('Request URL', req.url);
    console.log('Request Method', req.method);

    //Plain Text Response
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Hello World!!!')
    // res.end()

    //Response in HTML
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h3>Hello World!!!</h3>')
    // res.write('<p>This is Paragraph</p>')
    // res.end()

    //Response in HTML File
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            // res.write(data)
            // res.end()
            //OR
            res.end(data)
        }
    })
});

server.listen(port, hostname, () => {
    console.log('Server is start...')
})