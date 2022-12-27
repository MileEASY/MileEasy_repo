const { User } = require('../model');
const { Trip } = require('../model');
const { Recommend } = require('../model');

//추천페이지
exports.recommend_home = (req, res) => {
  if (req.session.user) {
    res.render('recommend', {isLogin : true});
  }
  else {
    res.render('recommend', {isLogin : false});
  }

}

//사용자 추천페이지 보기
exports.guest_home = async (req, res) => {
        let result1 = await User.findOne({where : {id : req.session.user}});
        let result2 = await Recommend.findAll();
        res.render('guest', {
          photo : result1.imgpath,
          name : result2.name,
          mbti : result2.mbti,
          comment : result2.comment
        });
}

//내 카드만 보기
exports.mycard = async (req, res) => {
  let result1 = await User.findOne({where : {id : req.session.user}});
  let result2 = await Recommend.findAll({where : {name : req.session.user}});
  res.send({
    photo : result1.imgpath,
    name : result2.name,
    mbti : result2.mbti,
    comment : result2.comment
  })
}

exports.cardcreate = async (req, res) => {
    let data = {
        name : req.session.user,
        // mbti: req.body.mbti,
        comment : req.body.comment
      }
    let result = await Recommend.create(data)
    console.log('post comment :', result);
    res.send(true);
    }