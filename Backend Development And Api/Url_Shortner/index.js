require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose")
const cors = require('cors');
const UrlRoute = require('./routers/shorturl.route.js')
const app = express();
app.use(express.urlencoded({extended:false}))

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// moved the code to the routers
app.use('/api/shorturl',UrlRoute)

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});








app.listen(port, function() {
  console.log(`http://localhost:${3000}`);
});
mongoose.connect("mongodb+srv://salmannoushad003:yCILo6nWw3BheQq1@cluster0.bmlet.mongodb.net/short_url?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("mongoose connected"))
