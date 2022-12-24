const multiparty = require("multiparty");
const { User } = require("../model");
const fs = require('fs');
const path = require('path');

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
  res.render("userInfo", { data: result});
}

exports.profileimg = (req, res)=>{
  const form = new multiparty.Form({uploadDir: "public/static/image"});
    form.parse(req, (err, fields, files) => {
      //console.log("profileimg_fields:",fields); 
      //console.log( files.imageFile[0] );
      console.log("profileimg_files:",files.imageFile[0].path); 
      let filePath = files.imageFile[0].path;
      User.update({imgpath:filePath},{
        where: { id: req.session.user },
      });
      //req.session.profile = filePath;
      res.send({ path: `/${filePath}` });
    })
}  

exports.userupdate = (req,res)=>{
  let data = {
    name: req.body.name,
    pw: req.body.pw, 
  };
  let beforeimg = req.body.imgpath;
  User.findOne({
    where: { id: req.body.id },  
  })
  .then((result)=>{
    console.log("req.body:",beforeimg);
    console.log('result.body:',result.imgpath);
    //let name = req.body.imgpath.split('image')[1];
    if(beforeimg !== "user_default_img.jpg"){
      fs.unlink(`./public/static/image/${beforeimg}`, (err) => {
        if (err) throw err;
        console.log("file delete");
      });
    }
  })
  .then(()=>{
    User.update(data, {
      where: { id: req.body.id },
    })
  })
  .then(()=>{
    res.send(true);
  });
}

exports.userdelete = (req,res)=>{
  User.findOne({
    where: { id: req.body.id },  
  })
  .then((result)=>{
    if(result.imgpath == "user_default_img.jpg"){
      console.log("default");
    } else {
      let name = result.imgpath.split('image')[1];
      fs.unlink(`./public/static/image/${name}`, (err) => {
        if (err) throw err;
        console.log("file delete");
      });
    }
  })
  .then(()=>{
    User.destroy({
      where: {id: req.body.id}
    });
  })
  .then(req.session.destroy((err)=>{
    if(err) throw err;
    res.send(true);
  }));
}

