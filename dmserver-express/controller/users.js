// 引入连接池
const pool = require('../utils/pool.js');

var usersController = 
{
    login:(req,res,next)=>
    {
        console.log(req);
        res.send({msg:'你好'})
    }
}

module.exports = usersController;