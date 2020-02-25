const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

/**  BCRYPT TEST
 const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}
myFunction()
*/

/*
var jwt = require('jsonwebtoken');

const myFunction = async () => {
    let token = jwt.sign({ _id : 'abc12345678' }, 'secretkey1', {expiresIn : '1 seconds' });
    console.log(`token is ${token}`);
    let vertoken = jwt.verify(token, 'secretkey1')
    //console.log(`vertoken is ${vertoken}`);
    console.log(vertoken);
}

myFunction()
*/

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    
    
    /*const task = await Task.findById('5e381720caa02f1a00dc8dff');
    await task.populate('owner').execPopulate();
    console.log(task.owner);
    */
    
    /*
    const user = await User.findById('5e381711caa02f1a00dc8dfd');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
    */
}

main();


