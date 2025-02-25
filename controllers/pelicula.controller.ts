import { Request, Response } from 'express';
import { PeliculaService } from '../services/pelicula.service';
import { validatePelicula } from '../validators/pelicula.validator'; 

const peliculaService = new PeliculaService();

export class PeliculaController {
    create = async (req: Request, res: Response) => {
        try {
            const { error } = validatePelicula(req.body);
            if (error) {
                 res.status(400).json({ message: error.details[0].message });
            }

            const pelicula = await peliculaService.createPelicula(req.body);
             res.status(201).json(pelicula); 
        } catch (err) {
             res.status(500).json({ message: 'Error al crear la película', error: (err as Error).message });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const peliculas = await peliculaService.getPeliculas();
            res.json(peliculas); 
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener las películas', error: (err as Error).message });
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const pelicula = await peliculaService.getPeliculaById(Number(req.params.id));
            if (!pelicula) {
                 res.status(404).json({ message: 'Película no encontrada' }); 
            }
            res.json(pelicula); 
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener la película', error: (err as Error).message });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const { error } = validatePelicula(req.body);
            if (error) {
                 res.status(400).json({ message: error.details[0].message }); 
            }

            const pelicula = await peliculaService.updatePelicula(Number(req.params.id), req.body);
            if (!pelicula) {
                 res.status(404).json({ message: 'Película no encontrada' }); 
            }
            res.json(pelicula); 
        } catch (err) {
            res.status(500).json({ message: 'Error al actualizar la película', error: (err as Error).message });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const pelicula = await peliculaService.deletePelicula(Number(req.params.id));
            if (!pelicula) {
                 res.status(404).json({ message: 'Película no encontrada' }); 
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ message: 'Error al eliminar la película', error: (err as Error).message });
        }
    }
}
