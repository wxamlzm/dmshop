'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async signin() {
      const { ctx } = this;
      console.log(ctx);
      const result = await ctx.service.user.find();
      ctx.body = result;
  }
}

module.exports = UserController;
