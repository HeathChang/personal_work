const express = require ('express')
const { update } = require('../models/user')
const auth = require('../middleware/auth')
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


// router.get("/users", auth ,async (req, res) => {
//     try{
//         const users = await User.find({})
//         res.status(201).send(users)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })

router.get("/users/me", auth ,async (req, res) => {
    res.send(req.user)
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
        const token = user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async(req,res)=>{
    try{
        //specific user
        req.user.tokens = req.user.tokens.filter((token)=>{
            console.log("req.token>>",req.token);
            console.log("token.token>>",token.token);
            console.log("return>> ",token.token !== req.token);
            //같을시, return false (return false,즉 로그인된 정보와 req 정보가 일치해야지만, 옳바른 로그아웃 가능. 이 라인이 빠지면, 무조건 log-out msg 출력)
            return token.token !== req.token
        })
        await req.user.save()
        res.send("successfully log-out")
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/users/logoutAll',auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send("successfully log-out all")
    }catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/me',auth,async(req,res)=>{
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
       //iteration 
        updates.forEach((update) => {
            req.user[update] = req.body[update]
        });
        await req.user.save()
        
        res.send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/me',auth,async(req,res)=>{
    try{
    await req.user.remove()
    res.send(req.user);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router