require('../src/db/mongoose')
const User = require('../src/models/user')

//6140617e276358c92a7d55e2

User.findByIdAndUpdate('6140617e276358c92a7d55e2', { age: 1 }).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 1 }) //age가 x인 애들 찾아줘
}).then((result) => {
  console.log("x살인 사람 수: ", result);
}).catch((e) => {
  console.log(e);
})


const updateAgeandCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ "age": age })

  return count
}

updateAgeandCount('66140617e276358c92a7d55e2', 2)
  .then((count) => {
    console.log("x살인 사람 수: ", count);
  }).catch((e) => {
    console.log("에러발생>>", e);
  })