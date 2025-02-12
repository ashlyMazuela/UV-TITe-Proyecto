import express, { Request, Response } from "express";
import * as ubicacionControllers from "../controllers/ubicacion_controllers/ubicacion.controllers";

const router = express.Router();

// Mostrar todos los Ubicacions
router.get("/get", async (_req: Request, res: Response) => {
  try {
    const Ubicacions = await ubicacionControllers.getUbicaciones();
    return res.json(Ubicacions);
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al mostrar los Ubicacions: " + error.message });
  }
});

// Crear un Ubicacion
router.post("/post", async (req: Request, res: Response) => {
  try {
    await ubicacionControllers.postUbicacion({ ...req.body });
    return res.json({ msg: "Creacion exitosa de un ubicacion" });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ msg: "Error al crear un ubicacion: " + error.message });
  }
});

// Actualizar un Ubicacion
router.put("/put/:id", async (req: Request, res: Response) => {
  try {
    await ubicacionControllers.putUbicacion(req.params.id, req.body);

    return res.json({ msg: "Ubicacion actualizado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al actualizar el Ubicacion: " + error.message });
  }
});

// Eliminar un Ubicacion
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    await ubicacionControllers.deleteUbicacion({ ubicacion_ID: req.params.id });

    return res.json({ msg: "Ubicacion eliminado correctamente" });
  } catch (error: any) {
    return res.status(500).json({ msg: "Error al eliminar el Ubicacion: " + error.message });
  }
});

export default router;
