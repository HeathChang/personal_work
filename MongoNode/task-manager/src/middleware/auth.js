const jwt = require('jsonwebtoken')
const User = require ('../models/user')

const auth = async (req,res,next) =>{
    try{    
        const token = req.header('Authorization').replace('Bearer ','')
        console.log("checking token>>",token);
        //token>> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ1OTViNjYwZTc4OWI5NzhkM2JkZjYiLCJpYXQiOjE2MzE5NTI4NzF9.2UwXOGUnH-luqGPla4R9IQzAq6WENjcUhmEoHTlVfPM
        
        const decoded = jwt.verify(token , 'thisismynewcourse')
        console.log("checking decoded>>",decoded);
        //decoded>> { _id: '614595b660e789b978d3bdf6', iat: 1631952871 } => Object_id && time

        const user = await User.findOne({_id: decoded._id,'tokens.token':token})
        console.log("checking user>>",user);
        //정보
        if(!user){
            throw new Error()
        }
        req.user = user
        next()
    }catch(e){
        res.status(401).send({error: "please authenticate"})
    }
}

module.exports = auth