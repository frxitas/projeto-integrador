const Product = require("../models/ProductModel.js");
const { v4: uuidv4 } = require('uuid');

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

      const PROD_ID = request.params.id;
      const product = await Product.findOne({ where: { PROD_ID } });
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

      const { name, description, price, um_id, group_id, manufacturer_id } = request.body;      
      console.log({
        PROD_NOME: name,
        PROD_DESC: description,
        PROD_VALOR: price,
        PROD_UMED_ID: um_id,
        PROD_GRUPO_ID: group_id,
        PROD_FABRICANTE_ID: manufacturer_id,
      });
      
      await Product.create({
        PROD_NOME: name,
        PROD_DESC: description,
        PROD_VALOR: price,
        PROD_UMED_ID: um_id,
        PROD_GRUPO_ID: group_id,
        PROD_FABRICANTE_ID: manufacturer_id,
      });
      
      response.status(200).json("Produto cadastrado!");

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
  async delete(request,response){
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
  }
};