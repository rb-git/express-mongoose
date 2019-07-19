//imports
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

//express init
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//start server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})