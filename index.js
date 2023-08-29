// Qst 1- programme to print Hello world
const greetings = require('./hello-world');
console.log(greetings);

// Qst 4- Password generation
const generatepassword = require('./password');
console.log(generatepassword());

// Qst 5- programme to generate email
/*const email = require('./email-sender');
console.log(email());*/


const fs = require('fs');
const path = require('path');

let data = 'Hello Node'
//Qst 3 - file system to create file 
if(fs.existsSync(path.join(__dirname, '/documents'))){
    fs.writeFile(path.join(__dirname, '/documents', '/hello.txt'), JSON.stringify(data), (err)=>{
        if(err) throw err;
        console.log('file created');
      });
} else {

fs.mkdir(path.join(__dirname, '/documents'), (err)=> {
    if(err) throw err;
    console.log('folder created sucessfully');
  }); 
  fs.writeFile(path.join(__dirname, '/documents', '/welcome.txt'), JSON.stringify(data), (err)=>{
    if(err) throw err;
    console.log('file created');
  });
};
  
//Qst 2 - create a server and run and a program that runs on server 3000  
const http = require('http');
  
  const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello Node!!!!</h1>');
    res.end();
  });
  
  server.listen(5500, 'localhost', ()=> {
    console.log('listening for request on port 5500');
  });



 