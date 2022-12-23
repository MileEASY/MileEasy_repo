const multiparty = require("multiparty");
const { User } = require("../model");
const fs = require('fs');

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

exports.userupdate_home = async (req,res)=>{
  let result = await User.findOne({
      where: { id: req.session.user },  
  });
  res.render("userInfo", { data: result, profile:req.session.profile});
}

exports.profileimg = (req, res)=>{
  const form = new multiparty.Form({uploadDir: "public/static/image"});
    form.parse(req, (err, fields, files) => {
      console.log("profileimg_fields:"+fields); 
      console.log("profileimg_files:"+files.imageFile[0].path); 
      req.session.profile = files.imageFile[0].path;
      res.send({ path: `/${files.imageFile[0].path}` });
    });
}  

exports.userupdate = (req,res)=>{
  let data = {
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, {
    where: { id: req.body.id },
  })
  .then(()=>{
    //let profileid = req.session.profile.split('/')[3];
    console.log("file:"+ req.session.profile);
    /* 
    if(req.session.profile == "user_default_img.jpg"){
      console.log("default");
    } else {
      fs.unlink(`../public/static/image/${req.session.profile}`, err => {
        if (err) throw err;
        console.log('File is deleted.');
      }); 
    } */
  })
  .then(()=>{
    res.send(true);
  });
}

exports.userdelete = (req,res)=>{
  User.destroy({
    where: {id: req.body.id}
  })
  .then(()=>{
    /*
    if(req.session.profile == "user_default_img.jpg"){
      console.log("session:"+req.session.user);
    } else {
      fs.unlink(`../public/static/image/${req.session.profile}`, err => {
        if (err) throw err;
        console.log('File is deleted.');
      });
      console.log("session:"+req.session.user);
    } */
  })
  .then(req.session.destroy((err)=>{
    if(err) throw err;
    res.send(true);
  }));
}

