//프론트엔드 컨트롤러 여기서 작업하시면 됩니다.

exports.main = (req, res) => {
  console.log("sessionid:"+req.session.user);
  if(req.session.user) res.render("index", {isLogin: true, id:req.session.user});
  else res.render("index", {isLogin: false}); 
  };
  
  exports.recommend = (req,res)=>{
    res.render("recommend");
  }
  
  
