// 引入框架及核心模块
const express = require('express');
const path = require('path');

// 创建服务器对象;建立服务器及监听端口
const app = express();
app.listen(7000, ()=>{
    console.log('LinkStart')
})

// 引入路由
const userRouter = require('./routes/users.js');


// 中间件挂载
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', userRouter);
