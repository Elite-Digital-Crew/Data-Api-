require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error)=>{console.error(error)}) //listener
db.once('open', ()=> console.log('Connected to db')) ///makes sure db runs only once

app.use(express.json())
const dataRouter = require('./routes/dataRouter.js')
app.use('/data', dataRouter)

app.listen(port, () =>{
    console.log('server started')
});
