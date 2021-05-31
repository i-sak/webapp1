// index.js
// npm install express

const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  
  var staticFilePath = path.join(__dirname, "/public/");

  

  fs.readFile(staticFilePath+"/page/test.js", "UTF-8",
    function(err,data) {
      
      var tem = data;
      console.log(tem);
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

*/