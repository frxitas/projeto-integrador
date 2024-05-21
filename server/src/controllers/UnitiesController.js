const Unity = require("./models/UnityModel.js");

module.exports = {
  async all(request, response) {
    try {

      const unities = await Unity.findAll();
      response.status(200).json(unities);

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  }
}
