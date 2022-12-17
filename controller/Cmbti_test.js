const { User2 } = require('../model');
const { Trip2 } = require('../model');


exports.test = (req, res) => {
  res.render('mbtiTest');
}

exports.type = async (req, res) => {
  console.log('select type : ', req.body.type);
  let Jcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'J') {
      Jcount++;
    }
  }
  let Pcount = 0;
  for (let i = 0; i < req.body.type.length; i++) {
    if (req.body.type[i] === 'P') {
      Pcount++;
    }
  }
  res.send({
    'J' : Jcount,
    'P' : Pcount
  })
  }



  // data : {
  //   J : Jcount,
  //   P : Pcount
  // }
  // let result = await User2.update(data, {
  //   where : { id : 1 }
  // });

  // console.log( 'result : ', result)