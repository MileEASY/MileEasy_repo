const { User } = require('../model');
const { Trip } = require('../model');

//추천페이지
exports.recommend_home = (req, res) => {
    res.render('recommend');
}

//방명록
exports.guest_home = (rea, res) => {
    res.render('guest');
}