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
      }
      let result = await User.create(data);
        req.session.user = req.body.id;     
        console.log("db result:"+result);
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
      else {req.session.user = req.query.id; res.send({name: result.name});}
  }