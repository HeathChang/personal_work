const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
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
    }
})
//Hash
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
const User = mongoose.model('User', userSchema)

module.exports = User