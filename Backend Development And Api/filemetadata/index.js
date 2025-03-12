var express = require('express');
var cors = require('cors');
const fileRouter = require('./routers/file.router');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api/fileanalyse',fileRouter)

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('http://localhost:3000')
});

