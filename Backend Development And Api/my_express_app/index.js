const express = require("express");
require('dotenv').config()
let app = express();
const PORT = 3000;

app.use((req,res,next)=>{
    const msg = `${req.method} ${req.path} - ${req.ip}`
    console.log(msg)
    next()
})
// Define a route
app.get('/', (req, res) => {
    const absolutePath = __dirname + '/public/index.html'
    
    res.sendFile(absolutePath);
});

app.get('/now',(req,res,next)=>{
    req.time = new Date().toString();
    next();
},function(req,res){
    res.send({time:req.time})
})

app.get('/name',(req,res)=>{
    const first = req.query.first;
    const last = req.query.last;
    res.send({first,last})
})

app.get('/book/:book_id',(req,res,next)=>{
    const id = req.params.book_id;
    res.json({book_id : id})
})

app.get('/json',(req,res)=>{
    res.json({"Message": process.env.MESSAGE_STYLE == "uppercase" ? ("Hello Json").toUpperCase() : "Hello Json"});
})
app.use("/",express.static(__dirname+'/public'))
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});