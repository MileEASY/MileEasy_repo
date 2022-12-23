var express = require("express");
var controller = require("../controller/Cmain");
var controller2 = require("../controller/Cmbti_test");
var controller3 = require("../controller/Csigns");
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
router.post('/test_result', controller2.test_result);

router.get("/signup_home", controller3.signup_home);
router.get("/signup", controller3.idread);
router.post("/signup", controller3.signup);
router.get("/signin_home", controller3.signin_home);
router.get("/signin", controller3.signin);
router.get("/userUpdate_home", controller3.userupdate_home);
router.post("/userUpdate", controller3.profile);
router.post("/userUpdate/image", controller3.profileimg);

module.exports = router;
