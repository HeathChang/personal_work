const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true
})


// Validator
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true, //Path `name` is required.
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true, //양옆 띄어쓰기 없애기
    lowercase: true, //소문자로 저장
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive Number')
      }
    }
  }
})

////Data Inputs
const me = new User({
  name: "     Heath      ",
  email: 'MIKE@HEAD.IO ',
  //age: 29
  //_message: 'User validation failed';
})



me.save().then(() => {
  console.log("Saved: ", me);
}).catch((error) => {
  console.log("Error: ", error);
})