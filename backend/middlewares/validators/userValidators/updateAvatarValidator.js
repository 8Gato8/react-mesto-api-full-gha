const { celebrate, Joi } = require('celebrate');
const regex = require('../../regExpForLinkValidation');

module.exports = function () {
  return celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().pattern(regex).required().min(2),
    }),
  });
};
