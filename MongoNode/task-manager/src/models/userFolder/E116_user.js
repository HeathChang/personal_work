const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    tokens:[{
        token: {
            type: String,
            required:true
        }
    }]
})
userSchema.virtual('tasks',{
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

//instance method
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()},'thisismynewcourse')
    user.tokens = user.tokens.concat({token : token})
    await user.save()
    return token
}


//model method
userSchema.statics.findByCredentials = async(email,password) =>{
    const user = await User.findOne({email: email})
    if(!user){
        throw new Error('Unable to login-in.')
    }
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch){
        throw new Error('Operation failed. ')
    }
    return user
}

//middleware(Encryption)는 가끔 지속적으로 사용이 안되기에 이벤트(save)직전에 사용 (interceptor와 비슷)
//pre: doing sth before && post: doing sth after
//'save': name of the event
userSchema.pre('save',async function (next){
    //this: documents being saved -> individual users
    const user = this 
    console.log("changes will be made >>",this)
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    //next(): run code before event happens
    next()

})

//Delete User tasks when user is removed.
userSchema.pre('remove',async function(next){
    const user = this
    await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User