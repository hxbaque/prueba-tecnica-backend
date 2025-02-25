import Joi from 'joi';

const salaCineSchema = Joi.object({
    nombre: Joi.string().required(),
    estado: Joi.number().integer().min(0).max(1).required(),
});

export const validateSalaCine = (data: any) => {
    return salaCineSchema.validate(data);
};