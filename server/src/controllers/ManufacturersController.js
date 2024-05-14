const Manufacturer = require("./models/ManufacturerModel.js");

module.exports = {
  async all(request, response) {
    try {

      const manufacturers = await Manufacturer.findAll();
      response.status(200).json(manufacturers);

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  }
}
