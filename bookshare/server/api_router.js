const express = require('express')
const userApi = require('./api/user')

const router = express.Router()
router.post("/api/user/login",userApi.loginByUserName);
router.post("/api/user/register",userApi.register);

module.exports = router;
