const { User } = require('../model');
const { Trip } = require('../model');

//추천페이지
exports.recommend_home = (req, res) => {
   res.render('recommend');
}

//방명록
exports.guest_home = async (req, res) => {
    if(req.session.user) {
        let result = await User.findOne({where : {id : req.session.user}});
        res.render('guesthome', {isLogin: true, data: result});
    } else res.render('guesthome', {isLogin: false});
}

exports.guest_post_home = async (req, res) => {
  res.render('guest');
}

exports.guest_post = async (req, res) => {
    let data = {
        // mbti: req.body.mbti,
        comment : req.body.comment
      }
    let result = await User.update(data, {where : {id : req.session.user}})
    console.log('post comment :', result);
    res.send(true);
  }