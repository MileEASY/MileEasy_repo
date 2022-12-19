var express = require("express");
var controller = require("../controller/Cmain");
var controller2 = require("../controller/Cmbti_test");
var controller3 = require("../controller/Csigns");
const router = express.Router();

router.get("/", controller.main);
router.get("/test",controller.test);
router.get('/mbtitest',controller.mbti);


router.get('/test', controller2.test);
router.post('/test_type', controller2.type);

router.get("/signup_home", controller3.signup_home);
router.get("/signup", controller3.idread);
router.post("/signup", controller3.signup);
router.get("/signin_home", controller3.signin_home);
router.get("/signin", controller3.signin);

module.exports = router;
