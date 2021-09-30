// 引入mysql模块
const mysql = require('mysql');
// 创建接连吃对象
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'dmshop',
    connectionLimit: 15
});
// 导出对象
module.exports = pool;