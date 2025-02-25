import { Request, Response } from 'express';
import { PeliculaSalaCineService } from '../services/peliculaSalaCine.service';

const peliculaSalaCineService = new PeliculaSalaCineService();

export class PeliculaSalaCineController {
    create = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.createPeliculaSalaCine(req.body);
            return res.status(201).json(peliculaSalaCine);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const peliculasSalaCine = await peliculaSalaCineService.getPeliculasSalaCine();
            return res.json(peliculasSalaCine);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener las películas en sala de cine.' });
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.getPeliculaSalaCineById(Number(req.params.id));
            if (!peliculaSalaCine) {
                return res.status(404).json({ message: 'Película no encontrada.' });
            }
            return res.json(peliculaSalaCine);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const peliculaSalaCine = await peliculaSalaCineService.updatePeliculaSalaCine(Number(req.params.id), req.body);
            if (!peliculaSalaCine) {
                return res.status(404).json({ message: 'Película no encontrada.' });
            }
            return res.json(peliculaSalaCine);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            await peliculaSalaCineService.deletePeliculaSalaCine(Number(req.params.id));
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    findByNameAndSala = async (req: Request, res: Response) => {
        try {
            const { name, idSala } = req.params;
            const result = await peliculaSalaCineService.findByNameAndSala(name, Number(idSala));
            return res.json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Error al buscar películas por nombre y sala.' });
        }
    }

    countByDate = async (req: Request, res: Response) => {
        try {
            const { date } = req.params;
            const count = await peliculaSalaCineService.countByDate(new Date(date));
            return res.json({ count });
        } catch (error) {
            return res.status(500).json({ message: 'Error al contar las películas por fecha.' });
        }
    }
}
