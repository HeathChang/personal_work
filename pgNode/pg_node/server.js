const express = require ('express');
const bodyParser =require('body-parser');
const app = express();
var router = express.Router();
const db=require('./maria')
var url = require('url');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/member',(req,res)=>{
    //client>App.js>const member내에 있는 데이터 가져오기
    //해당 데이터를 json 형식으로 반환
      db.query('select * from member', (error, result, fields)=> { // 쿼리문을 이용해 데이터를 가져온다.
        if(!error) { // 에러가 없다면
          res.send(result); // rows 를 보내주자
        } else { // 에러가 있다면?
          console.log("error가 발생했습니다>> 에러정보: " + error);
          res.send(error); // console 창에 에러를 띄워주고, 에러를 보내준다.
        }
    })
});

app.get('/detailpage/:gameNo',(req,res)=>{
      var urlParse = url.parse(req.url,true);
      var queryData = urlParse.query;
      var sql ='select * from game where gameNo=?'
      console.log("gameNo: "+queryData.gameNo);
      db.query(sql,[queryData.gameNo],(error, result, fields)=> { // 쿼리문을 이용해 데이터를 가져온다.
        if(!error) { // 에러가 없다면
          res.send(result); 
        } else { // 에러가 있다면?
          console.log("error가 발생했습니다>> 에러정보: " + error);
          res.send(error);
        }
    })
});

app.listen(port,()=> console.log(`Listening on port ${port}`));