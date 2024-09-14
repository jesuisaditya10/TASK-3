const express = require("express");
const {isAuthenticatedUser , isAuthorizedUser} = require("../middleware/auth");
const { logout, deleteMe } = require("../controllers/userController");
const { logUrl } = require("../utils/logger");
const router = express.Router();

router.route("/logout").get(isAuthenticatedUser , logout);
router.route("/deleteme").get(isAuthenticatedUser, logUrl("/deleteme") , isAuthorizedUser , deleteMe);


module.exports = router;