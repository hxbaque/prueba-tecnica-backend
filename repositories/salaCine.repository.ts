import SalaCine from '../models/salaCine.model';

export class SalaCineRepository {
    async create(data: any) {
        return SalaCine.create(data);
    }

    async findAll() {
        return SalaCine.findAll({
            where: {
                estado: 1,  
            },
        });
    }
    async findOne(filters: any) {
        try {
            if (!filters || typeof filters !== 'object') {
                throw new Error('Los filtros deben ser un objeto válido');
            }
            const cleanFilters = {
                nombre: String(filters.nombre),
                estado: Number(filters.estado),
            };
;
            const salaCine = await SalaCine.findOne({ where: cleanFilters });
            
            return salaCine;
        } catch (error) {
            console.error('Error al buscar sala:', error);
        }
    }
    
    

    async findById(id: number) {
        return SalaCine.findByPk(id);  
    }

    async update(id: number, data: any) {
        const salaCine = await this.findById(id);
        if (salaCine) {
            return salaCine.update(data);
        }
        throw new Error('Sala de cine no encontrada'); // Manejo de error si no se encuentra
    }

    async delete(id: number) {
        const salaCine = await this.findById(id);
        if (salaCine) {
            return salaCine.update({ estado: 0 }); // Cambiado a mayúsculas
        }
        throw new Error('Sala de cine no encontrada'); // Manejo de error si no se encuentra
    }
}
export default SalaCineRepository;