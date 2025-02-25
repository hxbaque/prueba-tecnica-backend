import { Router } from "express";
import { PeliculaSalaCineController } from "../controllers/peliculasalacines.controller";

const router = Router();
const peliculaSalaCineController = new PeliculaSalaCineController();

router.post("/", peliculaSalaCineController.create);
router.get("/", peliculaSalaCineController.getAll);
router.get("/:id", peliculaSalaCineController.getById);
router.put("/:id", peliculaSalaCineController.update);
router.delete("/:id", peliculaSalaCineController.delete);
router.get("/find/:name/:idSala", peliculaSalaCineController.findByNameAndSala); 
router.get("/count/:date", peliculaSalaCineController.countByDate); 

export default router;
