const Ticket = require("./models/TicketModel.js");
const Op = require("sequelize").Op;

module.exports = {
  async all(request, response) {
    try {
      const { skip, take, subject, orderBy } = request.query;
      const TICKET_SUBJECT = subject;

      const { count, rows } = await Ticket.findAndCountAll({
        offset: skip,
        limit: take,
        order: orderBy ? [[orderBy, "DESC"]] : [],
        where: {
          TICKET_SUBJECT: { [Op.substring]: TICKET_SUBJECT },
        },
      });

      const total = count;
      const tickets = rows;

      response.status(200).json({ tickets, total });
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async allByProductId(request, response) {
    try {
      const { id, subject } = request.query;
      const PRODUCT_ID = id;
      const TICKET_SUBJECT = subject;

      const tickets = await Ticket.findAll({
        where: {
          PRODUCT_ID: PRODUCT_ID,
          TICKET_SUBJECT: { [Op.substring]: TICKET_SUBJECT },
        },
      });

      response.status(200).json(tickets);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async one(request, response) {
    try {
      const TICKET_ID = request.params.id;
      const ticket = await Ticket.findOne({ where: { TICKET_ID } });

      if (!ticket) {
        return response.status(400).json("Ticket não encontrado!");
      }

      response.status(200).json(ticket);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const { productId, contact, subject, description, type, priority } = request.body;

      await Ticket.create({
        PRODUCT_ID: productId,
        TICKET_CONTACT: contact,
        TICKET_SUBJECT: subject,
        TICKET_DESCRIPTION: description,
        TICKET_TYPE: type,
        TICKET_STATUS: 1,
        TICKET_PRIORITY: priority,
        CREATED_AT: Math.floor(new Date().getTime() / 1000 - 10800),
        UPDATED_AT: Math.floor(new Date().getTime() / 1000 - 10800),
      });

      response.status(200).json("Ticket criado com sucesso!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { productId, contact, subject, description, type, status, priority } = request.body;
      const TICKET_id = request.params.id;
      const ticket = await Ticket.findOne({ where: { TICKET_id } });

      if (!ticket) {
        return response.status(400).json("Ticket não encontrado!");
      }

      await ticket.update({
        PRODUCT_ID: productId,
        TICKET_CONTACT: contact,
        TICKET_SUBJECT: subject,
        TICKET_DESCRIPTION: description,
        TICKET_TYPE: type,
        TICKET_STATUS: status,
        TICKET_PRIORITY: priority,
        CREATED_AT: ticket.dataValues.CREATED_AT,
        UPDATED_AT: Math.floor(new Date().getTime() / 1000 - 10800),
      });

      response.status(200).json("Ticket atualizado!");
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
  async countTicketsByStatus(request, response) {
    try {
      const { status } = request.query;

      try {
        let counts = [];

        for (let index in status) {
          let TICKET_STATUS = Number(status[index]);

          let countByStatus = await Ticket.count({
            where: { TICKET_STATUS },
          });

          counts.push(countByStatus);
        }

        response.status(200).json(counts);
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    } catch (error) {}
  },
};
