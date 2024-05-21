const Group = require("./models/GroupModel.js");

module.exports = {
  async all(request, response) {
    try {

      const groups = await Group.findAll();
      response.status(200).json(groups);

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  }
}
