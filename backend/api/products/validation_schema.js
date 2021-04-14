import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
const myJoiObjectId = JoiObjectId(Joi);

const productSchema = Joi.object({
  keyword: Joi.string().trim().optional().allow('').max(20),
  page: Joi.number(),
  limit: Joi.number(),
  id: myJoiObjectId(),
});

export default productSchema;
