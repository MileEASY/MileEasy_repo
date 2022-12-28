const { User } = require("../model");
const { Trip } = require("../model");
const { Recommend } = require("../model");

//추천페이지
exports.recommend_home = (req, res) => {
  if (req.session.user) {
    res.render("recommend", { isLogin: true });
  } else {
    res.render("recommend", { isLogin: false });
  }
};

//사용자 추천페이지 보기
exports.guest_home = async (req, res) => {
  if (req.session.user) {
    // let result1 = await Recommend.findAll({ where: { name: req.session.user } });
    let result2 = await Recommend.findAll();
    res.render("guesthome", {
      isLogin: true,
      delete : req.session.user,
      data : result2

    });
  } else {
    let result3 = await Recommend.findAll();
    res.render("guesthome", { 
      isLogin: false,
      data : result3 });
  }
};
//내 카드만 보기
exports.mycard = async (req, res) => {
  let result = await Recommend.findAll({ where: { name: req.session.user } });
  res.send(result);
};

//내 카드 삭제
exports.card_delete = async (req, res) => {
  console.log(req.body.rc_id)
  let result1 = await Recommend.destroy({where : {rc_id : req.body.rc_id}});
  console.log(result1);
  let result2 = await Recommend.findAll({ where: { name: req.session.user }});
  res.send(result2);
}

//여행지 추천 입력창
exports.guest_post_home = async (req, res) => {
  res.render("guest");
};

//추천 여행지 입력 완료 버튼
exports.cardcreate = async (req, res) => {
  let result1 = await User.findOne({where : {id : req.session.user}})
  let data = {
    name: req.session.user,
    // mbti: req.body.mbti,
    comment: req.body.comment,
    imgpath : result1.imgpath
  };
  let result2 = await Recommend.create(data);
  console.log("post comment :", result2);
  res.send(true);
};
