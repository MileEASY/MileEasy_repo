var express = require("express");
var controller = require("../controller/Cfront");
var controller2 = require("../controller/Cmbti_test");
const router = express.Router();
const router2 = express.Router();

router.get("/", controller.home);
router.get("/signup", controller.idread);
router.post("/signup", controller.signup);
router.get("/signin", controller.signin);

router2.get("/test", controller2.test);
router2.post('/test_type', controller2.type);

module.exports = router;
