const Service = require('egg').Service;

class UserService extends Service {
    async find() {
        const user = await this.app.mysql.query('SELECT* FROM users WHERE id = 1')
        return user
    }
}

module.exports = UserService;