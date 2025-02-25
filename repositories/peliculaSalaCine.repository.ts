import PeliculaSalaCine from '../models/peliculaSalaCine.model';
import Pelicula from '../models/pelicula.model';
import SalaCine from '../models/salaCine.model';

export class PeliculaSalaCineRepository {
    async create(data: any) {
        return PeliculaSalaCine.create(data);
    }

    async findAll(filters?: any) {
        return PeliculaSalaCine.findAll({ where: { ...filters, estado: 1 } }); 
    }

    async findById(id: number) {
        return PeliculaSalaCine.findOne({ where: { id, estado: 1 } }); 
    }

    async update(id: number, data: any) {
        const peliculaSalaCine = await this.findById(id);
        return peliculaSalaCine?.update(data);
    }

    async delete(id: number) {
        const peliculaSalaCine = await this.findById(id);
        if (peliculaSalaCine) {
            return peliculaSalaCine.update({ estado: 0 });
        }
        return null; 
    }
    
    async findPeliculasByNameAndSala(name: string, idSala: number) {
        return PeliculaSalaCine.findAll({
            where: {
                idSalaCine: idSala,
                '$Pelicula.nombre$': name,
                estado: 1 
            },
            include: [{ model: Pelicula, required: true }, { model: SalaCine, required: true }],
        });
    }

    async countPeliculasByDate(date: Date) {
        return PeliculaSalaCine.count({ where: { fechaPublicacion: date, estado: 1 } }); // Contar solo registros activos
    }
}
