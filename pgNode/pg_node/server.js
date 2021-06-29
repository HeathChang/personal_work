const express = require ('express');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/member',(request,response)=>{
  response.send([
    //client>App.js>const member내에 있는 데이터 가져오기
    //해당 데이터를 json 형식으로 반환
    {
      'name':'홍길동2',
      'birthday':'941230209',
      'gender':'남자',
      'job':'대학생'
    },{
      'name':'홍동3',
      'birthday':'9209',
      'gender':'여자',
      'job':'울랄라'
    },{
      'name':'길동43',
      'birthday':'941230209',
      'gender':'자자',
      'job':'드래곤볼'
    }
  ])
});

app.listen(port,()=> console.log(`Listening on port ${port}`));