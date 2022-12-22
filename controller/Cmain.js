//프론트엔드 컨트롤러 여기서 작업하시면 됩니다.
const { User } = require('../model');
const { Trip } = require('../model');

exports.main = async (req, res) => {
  console.log("sessionid:"+req.session.user);
  if(req.session.user) {
    let result = await User.findOne({where : {id : req.session.user}});
    res.render("index", {isLogin: true, id:req.session.user, whether_test:result.mbti});
  }
  else res.render("index", {isLogin: false}); 
  };
  
  exports.recommend = (req,res)=>{
    res.render("recommend");
  };