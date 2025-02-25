import Joi from 'joi';

const peliculaSalaCineSchema = Joi.object({
    fecha_publicacion: Joi.date().required(),
    fecha_fin: Joi.date().greater(Joi.ref('fecha_publicacion')).required(),
    id_sala_cine: Joi.number().integer().required(),
    id_pelicula: Joi.number().integer().required(),
    estado: Joi.number().integer().min(0).max(1).required(), // Agregado el campo estado
});

export const validatePeliculaSalaCine = (data: any) => {
    return peliculaSalaCineSchema.validate(data);
};
