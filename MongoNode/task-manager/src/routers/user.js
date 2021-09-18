const express = require ('express')
const { update } = require('../models/user')
const router = new express.Router()

const User = require('../models/user')

// //라우터 사용법
// //1. 라우터 객체 
// const router = new express.Router()
// //2. api 설정
// router.get('/test',(req,res)=>{
//     res.send("Testing Router")
// })
// //3. 라우터 등록
// app.use(router)




router.get("/users", async (req, res) => {
    try{
        const users = await User.find({})
        res.status(201).send(users)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get("/users/:id", async (req, res) => {
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

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})

router.patch('/users/:id',async(req,res)=>{
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
        const user = await User.findById(req.params.id)
       //iteration 
        updates.forEach((update) => {
            user[update] = req.body[update]
        });
        await user.save()
        //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators:true})
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id',async(req,res)=>{
    try{
    const user= await User.findByIdAndDelete(req.params.id)
    if(!user){
        res.status(404).send({error:"cannot find user"});
    }
    res.send(user);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router