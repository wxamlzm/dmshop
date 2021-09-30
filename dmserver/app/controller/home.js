'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async signin() {
      const { ctx } = this;

      const result = {
        msg: '你好'
      };
      ctx.body = result;
  }
}

module.exports = UserController;
