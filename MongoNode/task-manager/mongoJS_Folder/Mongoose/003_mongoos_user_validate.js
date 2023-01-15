const mongoose = require('mongoose')
const validate = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true
})


// Validator
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true //Path `name` is required.
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(email)) {
        throw new Error('Email is not Perfect')
      }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive Number')
      }
    }
  }
})

////Data Inputs
const me = new User({
  name: "Heath",
  email: 'heath@gmail.com',
  age: 29
  //_message: 'User validation failed';
})



me.save().then(() => {
  console.log("Saved: ", me);
}).catch((error) => {
  console.log("Error: ", error);
})