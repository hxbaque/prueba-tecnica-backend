import Joi from 'joi';

const peliculaSchema = Joi.object({
    nombre: Joi.string().required(),
    duracion: Joi.number().integer().positive().required(),
    estado: Joi.number().integer().min(0).max(1).required(), 
});

export const validatePelicula = (data: any) => {
    return peliculaSchema.validate(data);
};