const {User2} = require('../model');
const {Trip2} = require('../model');
  
exports.test = (req, res) =>{
    res.render('mbtiTest');
}

exports.type = async (req, res) =>{
  console.log('select type : ', req.body.type);
    
  //유형별 개수를 변수에 담기
  let Jcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'J') {
      Jcount++;
    }
  }

  let Pcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'P') {
      Pcount++;
    }
  }

  console.log('J : ', Jcount, 'P : ', Pcount)

  //DB에 값 등록 (User table)
  let data = {
      J : Jcount,
      P : Pcount
  }
  // let result = await User.create(data);
  // console.log( 'result : ', result)

  //유형검사 결과
  //res.render('ei_test')
}