const Joi = require('joi');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = validate;

