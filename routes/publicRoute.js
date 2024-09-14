const express = require("express");
const {getFunction, register, login} = require("../controllers/publicController");
const router = express.Router();

router.route("/get").get(getFunction);
router.route("/login").post(login);
router.route("/register").post(register);


module.exports = router;