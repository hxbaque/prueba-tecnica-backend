import { PeliculaSalaCineRepository } from "../repositories/peliculaSalaCine.repository";
import { SalaCineRepository } from "../repositories/salaCine.repository";
import { validateSalaCine } from "../validators/salaCine.validator"; 

const salaCineRepository = new SalaCineRepository();
const peliculaSalaCineRepository = new PeliculaSalaCineRepository();

export class SalaCineService {
    async createSalaCine(data: any) {
        
        const { error } = validateSalaCine(data);
        if (error) {
            throw new Error(error.details[0].message); 
        }
        return salaCineRepository.create(data);
    }

    async getSalasCine() {
        console.log('getSalasCine');
        const salasCine = await salaCineRepository.findAll();
        console.log(salasCine);
        return salasCine;
    }

    async getSalaCineById(id: number) {
        const salaCine = await salaCineRepository.findById(id);
        if (!salaCine) {
            throw new Error('Sala de cine no encontrada'); 
        }
        return salaCine;
    }

    async updateSalaCine(id: number, data: any) {
        const { error } = validateSalaCine(data);
        if (error) {
            throw new Error(error.details[0].message); 
        }

        const salaCine = await salaCineRepository.findById(id);
        if (!salaCine) {
            throw new Error('Sala de cine no encontrada'); 
        }
        return salaCineRepository.update(id, data);
    }

    async deleteSalaCine(id: number) {
        const salaCine = await salaCineRepository.findById(id);
        if (!salaCine) {
            throw new Error('Sala de cine no encontrada'); 
        }
        return salaCineRepository.delete(id);
    }

    async checkSalaAvailabilityByName(salaNombre: string) {
        console.log('checkSalaAvailabilityByName');
        console.log(salaNombre);
        const sala = await salaCineRepository.findOne({ nombre: salaNombre, estado: 1 } );
        console.log(sala);
        if (!sala) {
            return "Sala no encontrada";
        }
    
        const peliculas = await peliculaSalaCineRepository.findAll({ id_sala_cine: sala.id_sala });
        const count = peliculas.length;
    
        if (count < 3) {
            return "Sala disponible";
        } else if (count <= 5) {
            return `Sala con ${count} películas asignadas`;
        } else {
            return "Sala no disponible";
        }
    }
}
