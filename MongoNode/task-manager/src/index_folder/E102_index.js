const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//parse incoming JSON to Object
app.use(express.json())
//라우터 사용(2개)
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})