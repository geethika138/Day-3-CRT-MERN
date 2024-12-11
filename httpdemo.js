const http = require('http')
const serv = http.createServer((req,res)=>{
    res.write("Such feeling coming ove for me")
    res.end()
}).listen(5050,()=>{
    console.log("Server started")
})