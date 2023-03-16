const repo = require("../db/repository/user_operations");

module.exports = {
  login(request, response) {
    const userObject = request.body;
    console.log("USER #### ", userObject);
    repo.find(userObject, response);
  },
  async register(request, response) {
    const userObject = request.body;
    repo.findRegister(userObject, response);
  },
};
