// 引入express
const express = require('express');
const usersController = require('../controller/users.js')


// 创建路由对象
const router = express.Router();
console.log(usersController);
// 挂载接口属性
router.get('/login', usersController.login);



module.exports = router;