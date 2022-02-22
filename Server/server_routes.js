const http = require('http')
const hostname = 'localhost'
const port = 3000
const fs = require('fs')

const server = http.createServer((req, res)=>{
    let route = './views/'
    switch (req.url) {
        case '/':
            //route = route + 'index.html'
            //or
            route += 'index.html';
            break;
    
        case '/contact':
            route += 'contact.html';
            break;
    
        case '/about':
            route += 'about.html';
            break;
    
        default:
            route += '404.html';
            break;
    }
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(route,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })
});

server.listen(port, hostname, () => {
    console.log('Server is start...')
})