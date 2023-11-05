const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account.controller");

router.post("/", AccountController.createAccount);

router.get("/", AccountController.getAccounts);

module.exports = router;
