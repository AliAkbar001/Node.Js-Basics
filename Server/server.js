const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res)=>{
    console.log('A request is made');
});

server.listen(port, hostname, () => {
    console.log('Server is start...')
})