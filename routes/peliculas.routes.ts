import { Router } from 'express';
import { PeliculaController } from '../controllers/pelicula.controller';

const router = Router();

const peliculaController = new PeliculaController();
router.post('/', peliculaController.create);
router.get('/', peliculaController.getAll);
router.get('/:id', peliculaController.getById);
router.put('/:id', peliculaController.update);
router.delete('/:id', peliculaController.delete);

export default router;
