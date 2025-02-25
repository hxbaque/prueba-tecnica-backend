import PeliculaSalaCine from '../models/peliculaSalaCine.model';
import Pelicula from '../models/pelicula.model';
import SalaCine from '../models/salaCine.model';

export class PeliculaSalaCineRepository {
    async create(data: any) {
        return await PeliculaSalaCine.create(data);
    }

    async findAll(filters?: any) {
        const findAll =await PeliculaSalaCine.findAll({ where: { ...filters } });

        return findAll;
        
    }

    async findById(id: number) {
        const findById = await PeliculaSalaCine.findByPk(id);
        return findById;
    }

    async update(id: number, data: any) {
        const peliculaSalaCine = await this.findById(id);
        return peliculaSalaCine?.update(data);
    }

    async delete(id: number) {
        const peliculaSalaCine = await this.findById(id);
        if (peliculaSalaCine) {
            return await peliculaSalaCine.update({ estado: 0 });
        }
        return null; 
    }
    
    async findPeliculasByNameAndSala(name: string, idSala: number) {

        return await PeliculaSalaCine.findAll({
            where: {
                id_sala_cine: idSala,
                '$Pelicula.nombre$': name,
                estado: 1 
            },
            include: [{ model: Pelicula, required: true }, { model: SalaCine, required: true }],

        });
    }

    async countPeliculasByDate(date: Date) {
        return await PeliculaSalaCine.count({ where: { fecha_publicacion: date, estado: 1 } }); // Contar solo registros activos
    }
}
