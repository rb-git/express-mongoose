const express = require('express')
const Task = require('../models/task.js')
const router = new express.Router()

//add tasks
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
      await task.save()
      res.status(201).send(task)
    } catch(error){
      res.status(400).send(error)
    }
  })

  //get all tasks 
  router.get('/tasks', async (req,res) => {

   try{
     const tasks = await Task.find({})
     res.send(tasks)
   }
   catch(e){
      res.status(400).send()
   }
})

//get specific task
router.get('/tasks/:id', async (req,res) => {

   const _id = req.params.id
   try{
      await Task.findById(_id)   
      if(!task){
         res.status(404).send()
      }
      res.send(task)
   } catch(e){
      res.status(500).send() 
   }
})

router.patch('/tasks/:id', async (req, res) => {
  
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description'] //completed allowed
  const isValidOperation = updates.every((update) =>
  allowedUpdates.includes(update))
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
   }
 
 try{
   const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators : true})

   if(!task){
     return res.status(404).send() 
   }

   res.send(task)
 } catch (error){
   res.status(400).send(error) 
 }
})

router.delete('/tasks/:id', async (req, res) => {
  
  try {
    const task = await Task.findByIdAndDelete(req.params.id)  
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
    } catch (e) {
    res.status(500).send()
    }
  })


module.exports = router