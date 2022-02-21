const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res)=>{
    console.log('Request URL', req.url);
    console.log('Request Method', req.method);
});

server.listen(port, hostname, () => {
    console.log('Server is start...')
})