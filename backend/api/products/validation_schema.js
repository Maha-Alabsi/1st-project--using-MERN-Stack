import Joi from 'joi';

const productSchema = Joi.object({
<<<<<<< HEAD
    keyword:Joi.string().trim().optional().allow(''),
=======
    keyword:Joi.string().trim(),
>>>>>>> 0b6460cfca273b09fe26d3d46316ea2d223117db
    page: Joi.number(),
    limit: Joi.number()
})

export default productSchema;