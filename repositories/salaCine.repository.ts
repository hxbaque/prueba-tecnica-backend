import SalaCine from '../models/salaCine.model';

export class SalaCineRepository {
    async create(data: any) {
        return SalaCine.create(data);
    }

    async findAll() {
        return SalaCine.findAll({
            where: {
                estado: 1 
            }
        });
    }

    async findById(id: number) {
        return SalaCine.findByPk(id);
    }

    async update(id: number, data: any) {
        const salaCine = await this.findById(id);
        return salaCine?.update(data);
    }

    async delete(id: number) {
        const salaCine = await this.findById(id);
        if (salaCine) {
            return salaCine.update({ estado: 0 });
        }
        return null; 
    }
}
