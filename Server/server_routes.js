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
            route += 'index.html'
            res.statusCode = 200
            break;
    
        case '/contact':
            route += 'contact.html'
            res.statusCode = 200
            break;
    
        case '/about':
            route += 'about.html'
            res.statusCode = 200
            break;
    
        default:
            route += '404.html'
            res.statusCode = 404
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