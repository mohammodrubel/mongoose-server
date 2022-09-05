const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const todoSchema = require('../TodoSchema/TodoSchema')
const Todo = new mongoose.model("Todo",todoSchema)


// Get All Todos 
router.get('/',async(req,res)=>{
    try{
        const totalTodo = await Todo.find({})
        res.status(200).json({result:totalTodo})
    }catch(error){
        res.status(500).json({"result":"thare was a server side Error"})
    }
})

// Get single Todos 
router.get('/:id',async(req,res)=>{
    try{
        const singleTodos = await Todo.findById(req.params.id)
        res.status(200).json({"result":singleTodos})
    }catch(error){
        res.status(500).json({"result":"thare was a server side Error"})
    }
})

// Post Todos 
router.post('/',async(req,res)=>{
    const newTodo = new Todo(req.body)
    try{
        const todoupdate = newTodo.save()
        res.status(200).json({"result":todoupdate})
    }catch(err){
        res.status(500).json({err})
    }
})


// Post all  Todos 
router.post('/all',async(req,res)=>{
    try{
        const allTodos = await Todo.insertMany(req.body)
        res.status(200).json({allTodos})
    }catch(error){
        res.status(500).json({"result":"thare was a server side Error"})
    }
})

// Update  Todos 
router.put('/:id',async(req,res)=>{
    try{
        const updateTodos = await Todo.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateTodos)
    }catch(error){
        res.status(500).json({"result":"thare was a server side Error"})
    }
})

// Delete Todos 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteSingleTodos = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({"result,Delete Confirmed":deleteSingleTodos})
    }catch(error){
        res.status(500).json({"result":"thare was a server side Error"})
    }
})


module.exports = router