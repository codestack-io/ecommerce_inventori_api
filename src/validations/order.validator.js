const Joi = require("joi");

const orderSchema = Joi.object({
  customerName: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  customerEmail: Joi.string()
    .trim()
    .email()
    .required(),

  items: Joi.array()
    .min(1)
    .required()
    .items(
      Joi.object({
        productId: Joi.string()
          .hex()
          .length(24)
          .required(),

        quantity: Joi.number()
          .integer()
          .min(1)
          .required(),
      })
    ),
});

module.exports = orderSchema;