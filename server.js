const http = require('http');
const fs = require('fs');
 const host = '127.0.0.1'
 const port = 3000

 const server = http.createServer((req,res) => {
     res.writeHead(200,{'Content-Type':'text/html'})
     fs.readFile('index.html',(error,data)=>{
         if (error) {
             res.write(404)
         }else{
             res.write(data)
         }
         res.end()
     })
   
 })


 server.listen(port,host,()=> {
     console.log('listen server')
 })