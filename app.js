const http = require('http');
const server = http.createServer((req,res) =>{
    res.write('<h1> hello world </h1> <hr>');
    res.end();
});
server.listen(8080, 'localhost', function (){
    console.log('Server is running at port 8080')
});