import { Request, Response } from 'express';
import { SalaCineService } from '../services/salaCine.service';

const salaCineService = new SalaCineService();

export class SalaCineController {
    create = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.createSalaCine(req.body);
            return res.status(201).json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            } else {
                return res.status(404).json({ message: 'Unknown error' });
            }
        } 
    };

    getAll = async (req: Request, res: Response) => {
        try {
            const salasCine = await salaCineService.getSalasCine();
            console.log(salasCine);
            return res.json(salasCine);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener las salas de cine' }); 
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.getSalaCineById(Number(req.params.id));
            return res.json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            } else {
                return res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.updateSalaCine(Number(req.params.id), req.body);
            return res.json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            } else {
                return res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            await salaCineService.deleteSalaCine(Number(req.params.id));
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            } else {
                return res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    checkAvailability = async (req: Request, res: Response) => {
        try {
            const message = await salaCineService.checkSalaAvailabilityByName(String(req.params.nombre));
            return res.json({ message });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            } else {
                return res.status(404).json({ message: 'Unknown error' });
            }
        }
    };
}
