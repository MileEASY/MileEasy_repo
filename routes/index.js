var express = require("express");
var controller = require("../controller/Cmain");
var controller2 = require("../controller/Cmbti_test");
var controller3 = require("../controller/Csigns");
var controller4 = require("../controller/Crecommend");
const router = express.Router();

router.get("/", controller.main);
router.get("/recommend", controller.recommend);
// router.post("/whether_test", controller.whether_test);

router.get('/testmain',controller2.testmain);
router.get('/mbtitest',controller2.mbtitest);
router.post('/mbtitest', controller2.test_type);
router.get('/loading',controller2.loading);
router.get('/result',controller2.result);
router.post('/result',controller2.user_type);

router.get("/signup_home", controller3.signup_home);
router.get("/signup", controller3.idread);
router.post("/signup", controller3.signup);
router.get("/signin_home", controller3.signin_home);
router.get("/signin", controller3.signin);
router.get("/userUpdate_home", controller3.userupdate_home);
router.post("/userUpdate/image", controller3.profileimg);
router.patch("/userUpdate", controller3.userupdate);
router.post("/userDelete", controller3.userdelete);
router.get("/logout", controller3.logout);

router.get("/recommend_home", controller4.recommend_home);
router.get("/guest_home", controller4.guest_home);//추천페이지 렌더
router.get("/mycard", controller4.mycard);//내 카드만 보기
router.post("/cardcreate", controller4.cardcreate);//추천 여행지 작성

module.exports = router;
