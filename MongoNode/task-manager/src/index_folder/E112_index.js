const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const jwt = require('jsonwebtoken')
const auth = require ('./middleware/auth')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// without middleware : new request -> run route handler
// with    middleware: new request -> do sth -> run route handler
// middleware가 사용할때, next() 사용되어야함.
// app.use((req,res,next) => {
//     console.log("method>> ",req.method,"path>> ", req.path);
//     if(req.method === "GET"){
//         res.send("Get requests are disabled")
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send("site is currently down. come back soon")
// })

//parse incoming JSON to Object
app.use(express.json())
//라우터 사용(2개)
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const pet = {
    name: "halth"
}
pet.toJSON = function () {
    console.log(this);
    return {}
}
console.log(JSON.stringify(pet));

// const myFunction = async() =>{
//     //object: data that will be embedded
//     //creating token
//     const token = jwt.sign({_id: "abc123"},'thisismynewcourse',{expiresIn: '7 days'})
//     console.log("token>>",token)

//     //verify
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log("data>>",data);
// }
// myFunction();

