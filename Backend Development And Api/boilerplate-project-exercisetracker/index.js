const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter = require('./routers/user.router')


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))
app.use('/api/users',userRouter)





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('http://localhost:' + listener.address().port)
})

mongoose.connect('mongodb+srv://salmannoushad003:lKeWLt7wawAsX0bc@cluster0.bmlet.mongodb.net/fitness_tracker?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("connected to mongoose"))

