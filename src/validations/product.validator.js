const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  description: Joi.string()
    .trim()
    .min(5)
    .max(500)
    .required(),

  price: Joi.number()
    .positive()
    .required(),

  stock: Joi.number()
    .integer()
    .min(0)
    .required(),

  category: Joi.string()
    .trim()
    .required(),
});

module.exports = productSchema;