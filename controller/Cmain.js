//프론트엔드 컨트롤러 여기서 작업하시면 됩니다.
const { User } = require('../model');
const { Trip } = require('../model');

exports.main = async (req, res) => {
  console.log("sessionid:"+req.session.user);
  if(req.session.user) {
    let result = await User.findOne({where : {id : req.session.user}});
    // index렌더할때, 넘겨줄 값들을 작성. 마지막 data:result를 보내면 로그인 후 imgpath를 그안에서 찾을 것
    res.render("index", {isLogin: true, data:result});
  }
  else res.render("index", {isLogin: false}); 
  };
  
  exports.recommend = (req,res)=>{
    res.render("recommend");
  };