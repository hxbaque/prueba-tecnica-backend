import { Router } from 'express';
import { SalaCineController } from '../controllers/salaCine.controller';

const router = Router();

const salaCineController = new SalaCineController();
router.post('/', salaCineController.create);
router.get('/', salaCineController.getAll);
router.get('/:id', salaCineController.getById);
router.put('/:id', salaCineController.update);
router.delete('/:id', salaCineController.delete);
router.get('/:id/check-availability', salaCineController.checkAvailability);

export default router;
