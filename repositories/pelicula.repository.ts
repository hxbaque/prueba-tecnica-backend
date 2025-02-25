import Pelicula from '../models/pelicula.model';
import PeliculaSalaCine from '../models/peliculaSalaCine.model';
export class PeliculaRepository {
    async create(data: any) {
        return await Pelicula.create(data);
    }

    async findAll() {
        return await Pelicula.findAll({
            where: {
                estado: 1 
            }
        });
    }

    async findById(id: number) {
        return await Pelicula.findByPk(id);
    }

    async update(id: number, data: any) {
        const pelicula = await this.findById(id);
        return pelicula?.update(data);
    }

    async delete(id: number) {
        const pelicula = await this.findById(id);
        if (pelicula) {
            
            return await pelicula.update({ estado: 0 });
        }
        return null; 
    }
    
    async obtenerPeliculasPorFecha(fecha: string) {
        return await Pelicula.findAll({
          include: [
            {
              model: PeliculaSalaCine,
              where: { fecha_publicacion: fecha },
              required: true,
            },
          ],
        });
      }

    async contarPeliculasPorFecha(fecha: string): Promise<number> {
        return await PeliculaSalaCine.count({
          where: { fecha_publicacion: fecha },
        });
      }
}
