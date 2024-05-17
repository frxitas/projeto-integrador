const TicketType = require("./models/TicketTypeModel.js");

module.exports = {
  async all(request, response) {
    try {
      const ticketType = await TicketType.findAll().then(response => {
        let dictionary = {};

        for (let key in response) {
          dictionary[response[key].dataValues.TICKET_TYPE_ID] =
            response[key].dataValues.TICKET_TYPE_NAME;
        }

        return dictionary;
      });
      
      response.status(200).json(ticketType);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const { id, name } = request.body;

      await TicketType.create({
        TICKET_TYPE_ID: id,
        TICKET_TYPE_NAME: name,
      });

      response.status(200).json("Ticket Type criado com sucesso!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, description, price, um_id, group_id, manufacturer_id } = request.body;
      const PROD_ID = request.params.id;
      const product = await Product.findOne({ where: { PROD_ID } });

      if (!product) {
        return response.status(400).json("Produto não encontrado!");
      }

      product.PROD_NOME = name;
      product.PROD_DESC = description;
      product.PROD_VALOR = price;
      product.PROD_UMED_ID = um_id;
      product.PROD_GRUPO_ID = group_id;
      product.PROD_FABRICANTE_ID = manufacturer_id;

      await product.save();
      response.status(200).json("Produto atualizado!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async delete(request, response) {
    try {
      const PROD_ID = request.params.id;
      const product = await Product.destroy({ where: { PROD_ID } });

      if (!product) {
        return response.status(400).json("Produto não encontrado!");
      }

      response.status(200).json("Produto excluído!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
};
