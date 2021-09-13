require('../src/db/mongoose')
const User = require('../src/models/user')

//613c5e57731b366474dccdba

User.findByIdAndUpdate('613c5e57731b366474dccdba', { age: 39 }).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 39 }) //age가 x인 애들 찾아줘
}).then((result) => {
  console.log("x살인 사람 수: ", result);
}).catch((e) => {
  console.log(e);
})
