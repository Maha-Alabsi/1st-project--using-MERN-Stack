// import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
import { celebrate, Joi } from 'celebrate';
const myJoiObjectId = JoiObjectId(Joi);

const validations = {
  getProducts: celebrate({
    query: Joi.object({
      keyword: Joi.string().trim().optional().allow('').max(20),
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  getProduct: celebrate({
    params: Joi.object({
      id: myJoiObjectId(),
    }),
  }),
};

export default validations;
