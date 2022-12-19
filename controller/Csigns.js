const { User } = require("../model");
const { Trip } = require("../model");

exports.signup_home = (req, res)=>{res.render('signup');}

exports.idread = async (req,res)=>{
    let result = await User.findAll({ 
      where: {id: req.query.id}, 
      limit: 1
      });
    console.log(result);
    if(result.length>0) res.send(true);
    else res.send(false);
  }
  
  exports.signup = async (req,res)=>{
      let data = {
          id: req.body.id,
          pw: req.body.pw,
          name: req.body.name
          //mbti_ok: req.body.mbti_ok 
          //auth: req.body.auth 
          //mbti 검사한 경우는 추후에 추가 
      }
      let result = await User.create(data);
        console.log(result);
        res.send({name : result.name});
  }

  exports.signin_home = (req, res)=>{res.render('signin');}
  
  exports.signin = async (req, res)=>{
      let result = await User.findOne({ 
        where: {id: req.query.id}
      });
      console.log(result); //배열에 안 담김
      if(result == null) res.send(false);
      else if(req.query.pw !== result.pw) res.send(false);
      else {console.log("true"); res.send({name: result.name});}
  }