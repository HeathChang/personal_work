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

const multer = require('multer')
const upload = multer({
    dest:'images'
})
app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})

//parse incoming JSON to Object
app.use(express.json())
//라우터 사용(2개)
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//populate를 통해 조인 && 여기서 _id는 해당 컬렉션 id && owner는 로그인되어 있는 유저
const main = async ()=>{
    // const task = await Task.findById('614c32b63a1b47caec14b728')
    // console.log("task owner(which user create): ",task.owner);
    // await task.populate('owner')
    // console.log("collectionID: ",task);

    //해당 유저가 작성한 것은 join해서 사용 
    const user = await User.findById('614c32903a1b47caec14b71d')
    await user.populate('tasks')
    console.log(user.tasks);

}
main()
