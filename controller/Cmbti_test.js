const { User2 } = require('../model');
const { Trip2 } = require('../model');
let Ecount = 0; let Icount = 0;
let Scount = 0; let Ncount = 0;
let Tcount = 0; let Fcount = 0;
let Jcount = 0; let Pcount = 0;

exports.mbtitest = (req, res) => {
  res.render('mbtitest')
}
//MBTI테스트 진행
exports.test_type = async (req, res) => {
  // let mbti = '';
  console.log('select type : ', req.body.type);
  res.send(req.body.type)
}

//mbti테스트 메인
exports.testmain=(req,res)=>{
  res.render('testmain');
}

//loading페이지
exports.loading=(req,res)=>{
  res.render('loading');
}

//mbti테스트 결과
exports.result = (req, res) => {
  res.render('result');
}

exports.user_type = (req, res) => {
  console.log(req.body.data);
  const str = req.body.data;
  const arr = str.split(',');
  console.log(arr);

  // for (let i = 0; i < arr.length; i++) {
  //   if (req.body.type[i] === 'E') {
  //     Ecount++;
  //   }
  //   else if (req.body.type[i] === 'I') {
  //     Icount++;
  //   }
  //   else if (req.body.type[i] === 'S') {
  //     Scount++;
  //   }
  //   else if (req.body.type[i] === 'N') {
  //     Ncount++;
  //   }
  //   else if (req.body.type[i] === 'T') {
  //     Tcount++;
  //   }
  //   else if (req.body.type[i] === 'F') {
  //     Fcount++;
  //   }
  //   else if (req.body.type[i] === 'J') {
  //     Jcount++;
  //   }
  //   else if (req.body.type[i] === 'P') {
  //     Pcount++;
  //   }
  // };

  // if (Ecount > Icount) { mbti += 'E' }
  // else mbti += 'I'
  // if (Scount > Ncount) { mbti += 'S' }
  // else mbti += 'N'
  // if (Tcount > Fcount) { mbti += 'T' }
  // else mbti += 'F'
  // if (Jcount > Pcount) { mbti += 'J' }
  // else mbti += 'P'

  // console.log('userMBTI : ', mbti);
  // res.send();
}