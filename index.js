const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const todoHendeler = require('./routeHandeler/todoHandeler')

const app = express()
dotenv.config()
app.use(express.json())

// Connection 
mongoose.connect(process.env.MONGODB_ACCESS,
    {useNewUrlParser:true},
    {useUnifiedTopology:true}
    )
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))


// Router 
app.use('/todo',todoHendeler)

// Error Handeler 
function ErrorHandeler (err,req,res,next){
    if(res.headersSent){
        return err
    }
    res.status(500).json({ error:err })
}

app.listen(5000,()=>{
    console.log('lisining to port number 5000')
})