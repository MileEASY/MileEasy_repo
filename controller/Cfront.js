//프론트엔드 컨트롤러 여기서 작업하시면 됩니다.

exports.main = (req, res) => {
    res.render("index");
  };
  
  exports.test = (req,res)=>{
    res.render("test");
  }
  
  exports.mbti = (req,res)=>{
  res.render('mbtitest');
  }
  