const UserModel = require("../models/user");
module.exports = {
  find(userObject, response) {
    UserModel.findOne(
      { userid: userObject.userid, password: userObject.password },
      (err, doc) => {
        if (err) {
          response.json({ message: "Some DB Error  " });
        } else if (doc) {
          console.log("Data is", doc);
          response.json(doc);
        } else {
          response.json({ message: "Invalid Userid or Password" });
        }
      }
    );
  },
  findRegister(userObject, response) {
    function add(userObject) {
      var promise = UserModel.create(userObject);
      return promise;
    }
    UserModel.findOne(
      { userid: userObject.userid, password: userObject.password },
      async (err, doc) => {
        if (err) {
          response.json({ message: "Some DB Error  " });
        } else if (doc) {
          response.json({ message: "User already exist" });
        } else {
          const result = await add(userObject);
          if (result && result.userid) {
            response.json({ message: "User Register SuccessFully " });
          } else {
            response.json({ message: "Problem in User Register" });
          }
        }
      }
    );
  },
};
