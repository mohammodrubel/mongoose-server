const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    }
})

module.exports = todoSchema