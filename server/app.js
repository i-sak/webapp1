const http = require('http');
const fs = require('fs');

const hostname = '10.138.0.2';
//hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
  
  fs.readFile("./page/index.html", "UTF-8",
    function(err,data) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html'); //'text/plain'
      res.write(data);  // 2021-05-28
      res.end();
      //res.end('Hello World');
    });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
