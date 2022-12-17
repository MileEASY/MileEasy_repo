var express = require("express");
var controller = require("../controller/Cmain");
var controller2 = require("../controller/Cmbti_test");
const router = express.Router();

router.get("/", controller.main);

router.get("/test",controller.test);

router.get('/mbtitest',controller.mbti);

router.get('/test', controller2.test);
router.post('/test_type', controller2.type);

module.exports = router;
