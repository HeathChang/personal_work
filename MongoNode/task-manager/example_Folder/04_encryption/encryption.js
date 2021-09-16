//해당 내용은 E103_index.js에서 확인 가능
//hashing alg: one-way pass
const bcrypt = require('bcryptjs')

const myFunction = async() =>{
    const password = "Red12345!"
    const hashPassword = await bcrypt.hash(password,8);
    console.log(password);
    console.log(hashPassword);

    //하지만, 이런식으로 compare가능함
    const isMatch = await bcrypt.compare(password,hashPassword);
    console.log(isMatch);


}
myFunction();
