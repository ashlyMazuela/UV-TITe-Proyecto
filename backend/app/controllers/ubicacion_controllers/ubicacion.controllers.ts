import { v4 as uuidv4 } from "uuid";

import db from "../../models";

import { UbicacionInterfaceWSub, VerifUbicacionInterface } from "../../interfaces/types";

import * as verif from "./ubicacion.verif";

const Ubicacion = db.Ubicacion;

export const verifUbicacion = async (object: any): Promise<VerifUbicacionInterface> => {
  const newVerifUbicacionData: VerifUbicacionInterface = {
    direccion: verif.parseDireccion(object.direccion),
    coordenadas: verif.parseCoordenadas(object.coordenadas),
  };
  return newVerifUbicacionData;
};

// Controlador para crear una nueva ubicación
export const postUbicacion = async (object: any): Promise<UbicacionInterfaceWSub> => {
  const acceptedUbicacion = await verifUbicacion(object);

  const newUbicacionEntry: UbicacionInterfaceWSub = {
    ubicacion_ID: uuidv4(),
    ...acceptedUbicacion,
  };

  return newUbicacionEntry;
};

// Controlador para obtener todas las ubicaciones
export const getUbicaciones = async (): Promise<UbicacionInterfaceWSub[]> => {
  const ubicaciones = await Ubicacion.findAll();
  return ubicaciones;
};

// Controlador para obtener una ubicación por ID
export const getUbicacionById = async (object: any): Promise<void> => {
  const ubicacion = await Ubicacion.findByPk({
    where: { ubicacion_ID: object.ubicacion_ID },
  });
  if (!ubicacion) {
    throw new Error("Ubicación no encontrada");
  }
  return ubicacion;
};

// Controlador para actualizar una ubicación por ID
export const putUbicacion = async (
  ubicacion_ID: string,
  object: any,
): Promise<UbicacionInterfaceWSub> => {
  const ubicacion = await Ubicacion.findByPk(ubicacion_ID);
  if (!ubicacion) {
    throw new Error("Ubicación no encontrada");
  }

  const newUbicacionEntry: UbicacionInterfaceWSub = {
    ubicacion_ID: ubicacion_ID,
    direccion: verif.parseDireccion(object.direccion),
    coordenadas: verif.parseCoordenadas(object.coordenadas),
  };

  await Ubicacion.update(newUbicacionEntry);
  return newUbicacionEntry;
};

// Controlador para eliminar una ubicación por ID
export const deleteUbicacion = async (object: any): Promise<void> => {
  const result = await Ubicacion.destroy({
    where: { ubicacion_ID: object.ubicacion_ID },
  });
  if (!result) {
    throw new Error("Ubicación no encontrada");
  }
};
