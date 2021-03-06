const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

//parse incoming JSON to Object
app.use(express.json())

app.get("/users", async (req, res) => {
    try{
        const users = await User.find({})
        res.status(201).send(users)
    }catch(e){
        res.status(500).send(e)
    }
})
app.get("/users/:id", async (req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById({_id})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
    
})

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
})

app.patch('/users/:id',async(req,res)=>{
    //update할 내용
    const updates = Object.keys(req.body)
    //해당만 변경 가능함
    const allowedUpdates = ['name','email','password','age']
    //변경가능한 요소안에 update 내용이 포함되는지 체크 
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(404).send({error:"invalid update"})
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators:true})
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})