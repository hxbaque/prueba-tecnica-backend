import { Request, Response } from 'express';
import { PeliculaSalaCineService } from '../services/peliculaSalaCine.service';

const peliculaSalaCineService = new PeliculaSalaCineService();

export class PeliculaSalaCineController {
    create = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.createPeliculaSalaCine(req.body);
            res.status(201).json(peliculaSalaCine);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const peliculasSalaCine = await peliculaSalaCineService.getPeliculasSalaCine();
            res.json(peliculasSalaCine);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las películas en sala de cine.' });
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.getPeliculaSalaCineById(Number(req.params.id));
            if (!peliculaSalaCine) {
                 res.status(404).json({ message: 'Película no encontrada.' });
            }
            res.json(peliculaSalaCine);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.updatePeliculaSalaCine(Number(req.params.id), req.body);
            if (!peliculaSalaCine) {
                 res.status(404).json({ message: 'Película no encontrada.' });
            }
            res.json(peliculaSalaCine);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            await peliculaSalaCineService.deletePeliculaSalaCine(Number(req.params.id));
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    findByNameAndSala = async (req: Request, res: Response) => {
        try {
            const { name, idSala } = req.params;
            const result = await peliculaSalaCineService.findByNameAndSala(name, Number(idSala));
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al buscar películas por nombre y sala.' });
        }
    }

    countByDate = async (req: Request, res: Response) => {
        try {
            const { date } = req.params;
            const count = await peliculaSalaCineService.countByDate(new Date(date));
            res.json({ count });
        } catch (error) {
            res.status(500).json({ message: 'Error al contar las películas por fecha.' });
        }
    }
}
