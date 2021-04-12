import Joi from 'joi';

const productSchema = Joi.object({
    keyword:Joi.string().trim(),
    page: Joi.number(),
    limit: Joi.number()
})

export default productSchema;