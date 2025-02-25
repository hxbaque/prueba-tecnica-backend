import { PeliculaRepository } from '../repositories/pelicula.repository';
import { validatePelicula } from '../validators/pelicula.validator';


const peliculaRepository = new PeliculaRepository();

export class PeliculaService {
    async createPelicula(data: any) {
        const { error } = validatePelicula(data);
        if (error) {
            throw new Error(error.details[0].message); 
        }
        return peliculaRepository.create(data);
    }

    async getPeliculas() {
        return peliculaRepository.findAll();
    }

    async getPeliculaById(id: number) {
        return peliculaRepository.findById(id);
    }

    async updatePelicula(id: number, data: any) {
        const { error } = validatePelicula(data);
        if (error) {
            throw new Error(error.details[0].message); 
        }
        return peliculaRepository.update(id, data);
    }

    async deletePelicula(id: number) {
        return peliculaRepository.delete(id);
    }
    async obtenerPeliculasYConteoPorFecha(fecha: string) {
        const peliculas = await peliculaRepository.obtenerPeliculasPorFecha;
        const cantidad = await peliculaRepository.contarPeliculasPorFecha(fecha);
    
        return {
          cantidad,
          peliculas,
        };
      }
}