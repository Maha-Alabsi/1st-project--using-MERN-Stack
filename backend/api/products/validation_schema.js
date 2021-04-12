import Joi from 'joi';

const productSchema = Joi.object({
    keyword:Joi.string().trim().optional().allow(''),
    page: Joi.number(),
    limit: Joi.number()
})

export default productSchema;