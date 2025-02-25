import { Request, Response } from 'express';
import { SalaCineService } from '../services/salaCine.service';

const salaCineService = new SalaCineService();

export class SalaCineController {
    create = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.createSalaCine(req.body);
            res.status(201).json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(404).json({ message: 'Unknown error' });
            }
        } 
    };

    getAll = async (req: Request, res: Response) => {
        try {
            const salasCine = await salaCineService.getSalasCine();
            console.log(salasCine);
            res.json(salasCine);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las salas de cine' }); 
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.getSalaCineById(Number(req.params.id));
            res.json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const salaCine = await salaCineService.updateSalaCine(Number(req.params.id), req.body);
            res.json(salaCine);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            await salaCineService.deleteSalaCine(Number(req.params.id));
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(404).json({ message: 'Unknown error' });
            }
        }
    };

    checkAvailability = async (req: Request, res: Response) => {
        try {
            const message = await salaCineService.checkSalaAvailabilityByName(String(req.params.nombre));
            res.json({ message });
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(404).json({ message: 'Unknown error' });
            }
        }
    };
}
