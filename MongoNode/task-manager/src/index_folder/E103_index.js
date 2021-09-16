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


//hashing alg: one-way pass
const bcrypt = require('bcryptjs')

const myFunction = async() =>{
    const password = "Red12345!"
    const hashPassword = await bcrypt.hash(password,8);
    console.log(password);
    console.log(hashPassword);

    const isMatch = await bcrypt.compare(password,hashPassword);
    console.log(isMatch);
}
myFunction();

//

