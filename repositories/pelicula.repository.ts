import Pelicula from '../models/pelicula.model';

export class PeliculaRepository {
    async create(data: any) {
        return Pelicula.create(data);
    }

    async findAll() {
        return Pelicula.findAll({
            where: {
                estado: 1 
            }
        });
    }

    async findById(id: number) {
        return Pelicula.findByPk(id);
    }

    async update(id: number, data: any) {
        const pelicula = await this.findById(id);
        return pelicula?.update(data);
    }

    async delete(id: number) {
        const pelicula = await this.findById(id);
        if (pelicula) {
            
            return pelicula.update({ estado: 0 });
        }
        return null; 
    }
}
