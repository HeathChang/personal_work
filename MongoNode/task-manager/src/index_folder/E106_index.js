const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')

const app = express()
const port = process.env.PORT || 3000
const jwt = require('jsonwebtoken')

//parse incoming JSON to Object
app.use(express.json())
//라우터 사용(2개)
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


//JWT
const myFunction = async() =>{
    //object: data that will be embedded
    //creating token
    const token = jwt.sign({_id: "abc123"},'thisismynewcourse',{expiresIn: '7 days'})
    console.log("token>>",token)

    //verify
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log("data>>",data);
}
myFunction();

