// Additional work on HTTP request server.

const server2 = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html');
    let path = './page/';
    switch(req.url){

        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location' ,'/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;  }      


    
    
     fs.readFile(path, (err, data)=>{
        if(err){
            console.log('err');
            res.end();
        }else{
            
            res.end(data);
        }
        })
    

});

    server2.listen(5500, 'localhost', ()=>{

console.log("listening for request on port 3000 through the localhost");
});
