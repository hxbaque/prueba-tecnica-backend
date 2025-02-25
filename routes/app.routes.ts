import { Router } from "express";
import salaCineRoutes from './salaCine.routes';
import peliculasRoutes from './peliculas.routes';
import peliculaSalaCineRoutes from './peliculaSalaCine.routes';

const router = Router();
router.use('/salas-cine', salaCineRoutes);
router.use('/peliculas', peliculasRoutes);
router.use('/peliculas-salas-cine', peliculaSalaCineRoutes);

export default router;