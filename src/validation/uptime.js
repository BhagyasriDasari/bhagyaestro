const Joi = require('joi');

const uptimeSchema = Joi.object({
  deviceId: Joi.string().required(),
  start: Joi.date().required(),
  end: Joi.date().required(),
});

module.exports = uptimeSchema;
