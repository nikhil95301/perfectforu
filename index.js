require('./db/mongoose')
require('dotenv').config()
const express = require('express')
const app = express()
const userrouter = require('./router/userrouter')
const port = process.env.PORT||3000
// app.use((req,res,next) =>{
//     next()
//     console.log('hello')
// })
app.use(express.json())
app.use(userrouter)
app.listen(port,(e)=>{
    console.log('port is on '+ port)
})