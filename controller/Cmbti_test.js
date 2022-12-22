const { User } = require('../model');
const { Trip } = require('../model');
let Ecount = 0; let Icount = 0;
let Scount = 0; let Ncount = 0;
let Tcount = 0; let Fcount = 0;
let Jcount = 0; let Pcount = 0;


//mbti테스트 메인
exports.testmain=(req,res)=>{
  res.render('testmain');
}

exports.mbtitest = (req, res) => {
  res.render('mbtitest')
}

//MBTI테스트 진행
exports.test_type = async (req, res) => {
  console.log('select type : ', req.body.type);
  res.send(req.body.type)
}

//loading페이지
exports.loading=(req,res)=>{
  res.render('loading');
}

//mbti테스트 결과
exports.result = (req, res) => {
  res.render('result', {MAP_API_KEY:process.env.MAP_API_KEY});
}

exports.user_type = async (req, res) => {
  let usermbti = '';
  console.log('select type : ', req.body.type);

  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'E') {
      Ecount++;
    }
    else if (req.body.type[i] === 'I') {
      Icount++;
    }
    else if (req.body.type[i] === 'S') {
      Scount++;
    }
    else if (req.body.type[i] === 'N') {
      Ncount++;
    }
    else if (req.body.type[i] === 'T') {
      Tcount++;
    }
    else if (req.body.type[i] === 'F') {
      Fcount++;
    }
    else if (req.body.type[i] === 'J') {
      Jcount++;
    }
    else if (req.body.type[i] === 'P') {
      Pcount++;
    }
  };

  if (Ecount > Icount) { usermbti += 'E' }
  else usermbti += 'I'
  if (Scount > Ncount) { usermbti += 'S' }
  else usermbti += 'N'
  if (Tcount > Fcount) { usermbti += 'T' }
  else usermbti += 'F'
  if (Jcount > Pcount) { usermbti += 'J' }
  else usermbti += 'P'

  console.log('userMBTI : ', usermbti);
  let data = {
    mbti: usermbti
  }
  let result = await User.update(data, {where : {id : req.body.id}});
  console.log('User result :', result);
  res.send(usermbti);
}

exports.test_result = async (req, res) => {
  let result = await Trip.findOne({
    where : {mbti : req.body.type}
  })
  console.log('Trip result : ', result)
  res.render('result', {
    MAP_API_KEY:process.env.MAP_API_KEY,
    mbti : result.mbti,
    spot : result.spot,
    location : result.location,
    info : result.info
  });
}

//사용자의 mbti값 조회
//select mbti from User where id = 'userid'
//변수에 담기
//whether_test = select mbti from User where id = 'userid'

//mbti 값이 없는 경우(mbti검사를 안 한 경우) => 추천 여행지 보러가기
//mbti 값이 있는 경우(mbti검사를 한 경우) => 추천 여행지 보러가기
// if (whether_test = null) {
//   // let's get start 버튼 활성화
// }
// else // 추천여행지 보러가기 버튼 활성화

