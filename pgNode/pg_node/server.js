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
    //client>App.js>const member내에 있는 데이터 가져오기(4000번 포트에서 작동하며 app.get("/member")부분이 해당 URL로 들어오는 요청에 대한 처리를 담당
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
app.post('/register',(req,res)=>{

  const mbrId = req.body.mbrId;
  const mbrPw = req.body.mbrPw;
  const mbrName = req.body.mbrName;
  const mbrEmail = req.body.mbrEmail;
  const mbrGenre = req.body.mbrGenre;

  db.query("INSERT INTO `member` (mbrId,mbrPw,mbrName,mbrEmail,mbrGenre) values (?,?,?,?,?)", [mbrId,mbrPw,mbrName,mbrEmail,mbrGenre],(error,result)=>{
    if(!error) { // 에러가 없다면
      res.send(result); 
    } else { // 에러가 있다면?
      console.log("error가 발생했습니다>> 에러정보: " + error);
      res.send(error);
    }
  })
})

//로그인
app.post('/login',(req,res)=>{

  const mbrId = req.body.mbrId;
  const mbrPw = req.body.mbrPw;

  db.query("SELECT *  FROM `member` WHERE mbrId='?' AND password = '?'", [mbrId,mbrPw],(error,result)=>{
    if(!error) { // 에러가 없다면
      console.log("결과값: "+result);
      res.send(result); 
    } else { // 에러가 있다면?
      console.log("error가 발생했습니다>> 에러정보: " + error);
      res.send(error);
    }
  })
})



app.listen(port,()=> console.log(`Listening on port ${port}`));