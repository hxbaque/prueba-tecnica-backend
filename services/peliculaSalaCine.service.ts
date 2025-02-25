import { PeliculaSalaCineRepository } from "../repositories/peliculaSalaCine.repository";
import { validatePeliculaSalaCine } from "../validators/peliculaSalaCine.validator"; // Asegúrate de tener la ruta correcta

const peliculaSalaCineRepository = new PeliculaSalaCineRepository();

export class PeliculaSalaCineService {
    async createPeliculaSalaCine(data: any) {
        const { error } = validatePeliculaSalaCine(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
        return peliculaSalaCineRepository.create(data);
    }

    async getPeliculasSalaCine() {
        return peliculaSalaCineRepository.findAll();
    }

    async getPeliculaSalaCineById(id: number) {
        const peliculaSalaCine = await peliculaSalaCineRepository.findById(id);
        if (!peliculaSalaCine) {
            throw new Error('Película en sala de cine no encontrada');
        }
        return peliculaSalaCine;
    }

    async updatePeliculaSalaCine(id: number, data: any) {
        const { error } = validatePeliculaSalaCine(data);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const peliculaSalaCine = await peliculaSalaCineRepository.findById(id);
        if (!peliculaSalaCine) {
            throw new Error('Película en sala de cine no encontrada');
        }
        return peliculaSalaCineRepository.update(id, data);
    }

    async deletePeliculaSalaCine(id: number) {
        const peliculaSalaCine = await peliculaSalaCineRepository.findById(id);
        if (!peliculaSalaCine) {
            throw new Error('Película en sala de cine no encontrada');
        }
        return peliculaSalaCineRepository.delete(id); 
    }

    async findByNameAndSala(name: string, idSala: number) {
        return peliculaSalaCineRepository.findPeliculasByNameAndSala(name, idSala);
    }

    async countByDate(date: Date) {
        return peliculaSalaCineRepository.countPeliculasByDate(date);
    }
}
