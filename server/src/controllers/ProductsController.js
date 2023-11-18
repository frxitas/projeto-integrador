const Product = require("../models/ProductModel.js");

module.exports = {
  async all(request, response) {
    try {

      const products = await Product.findAll();
      response.status(200).json(products);

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  },
  async one(request, response) {
    try {

      const id = request.params.id;
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        return response.status(400).json("Produto não encontrado!");
      }
      response.status(200).json(product);

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  },
  async create(request, response) {
    try {

      await Product.create(request.body);
      response.status(200).json("Produto cadastrado!");

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  },
  async update(request, response) {
    try {

      const { name, description, price, um_id, group_id, manufacturer_id } = request.body;
      const id = request.params.id;
      const product = await Product.findOne({ where: { id } });

      if (!product) {
        return response.status(400).json("Produto não encontrado!");
      }

      product.name = name;
      product.price = price;
      product.description = description;
      product.um_id = um_id;
      product.group_id = group_id;
      product.manufacturer_id = manufacturer_id;

      await product.save();
      response.status(200).json("Produto atualizado!");

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  },
  async delete(request,response){
    try {

      const id = request.params.id;
      const product = await Product.destroy({ where: { id } });

      if (!product) {
        return response.status(400).json("Produto não encontrado!");
      }

      response.status(200).json("Produto excluído!");

    } catch (error) {

      console.log(error);
      response.status(400).send(error);

    }
  }
};