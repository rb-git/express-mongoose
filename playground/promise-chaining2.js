//imports
require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5d2d9f471630912830ed2275').then((task)=>{
   console.log(task)
   return Task.countDocuments({completed:false})
}).then((tasks)=>{
    console.log(tasks)
}).catch((error)=>{
   console.log(error);
}) */

const deleteTaskAndCount = async (taskId) => {
   const task = await Task.findByIdAndDelete(taskId)
   const count = await Task.countDocuments({completed:false})
   return count
}

deleteTaskAndCount('5d2d9ede1630912830ed2273').then((count) => {
   console.log('count', count)
}).catch((e) => {
   console.log(e)
})

