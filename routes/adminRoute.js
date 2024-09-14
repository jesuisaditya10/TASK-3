const express = require("express");
const {isAuthenticatedUser , isAuthorizedAdmin} = require("../middleware/auth");
const { roleUpdate, deleteUser } = require("../controllers/adminController");
const { logUrl } = require("../utils/logger");
const router = express.Router();

router.route("/roleupdate").post(isAuthenticatedUser ,logUrl("/roleupdate") , isAuthorizedAdmin , roleUpdate);
router.route("/deleteuser").post(isAuthenticatedUser ,logUrl("/deleteuser") , isAuthorizedAdmin , deleteUser);


module.exports = router;