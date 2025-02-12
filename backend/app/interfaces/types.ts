export interface ReportesInterface {
  reporte_ID: string; // Identificador de un reporte
  ubicacion_ID: string; // Varios reportes pueden estar en una ubicacion
  comunicacion_ID: string; // Una comunicacion puede tener un reporte
  nombre_usuario: string; // Un usuario puede tener muchos reportes
  fecha_envio: string;
  hora_envio: string;
  hora_evento: string;
  nombre_patrullero: string; // Requerido
  motivo_detalle: string;
  observaciones: string; // Opcional
  grupo_delictual: string; // Opcional
  num_movil: number;
}

export type VerifReportesInterface = Omit<
  ReportesInterface,
  "reporte_ID" | "ubicacion_ID" | "comunicacion_ID" | "nombre_usuario"
>;

export interface UbicacionInterface {
  ubicacion_ID: string;
  subsector_ID: string;
  direccion: string; // Requerido
  coordenadas: string;
}

export type UbicacionInterfaceWSub = Omit<UbicacionInterface, "subsector_ID">;

export type VerifUbicacionInterface = Omit<UbicacionInterface, "ubicacion_ID" | "subsector_ID">;

export interface ComunicacionInterface {
  comunicacion_ID: string;
  medio_comunicacion: string; // Requerido
  nombre_contribuyente: string; // Opcional
  telefono: string; // Requerido
}

export type VerifComunicacionInterface = Omit<ComunicacionInterface, "comunicacion_ID">;

export interface UsuarioInterface {
  nombre_usuario: string;
  nombre_personal: string; // Requerido
  contrasena: string;
  admin: boolean; // ¿Es administrador?
}

/*
############################################
################ DEPRECATED ################
############################################
*/
export interface FuncionariosInterface {
  funcionario_ID: string;
  nombre_funcionario: string;
  apellido_funcionario: string;
  tipo_funcionario: string;
}

export interface OperadoresInterface {
  operador_ID: string;
  funcionario_ID: string;
}

export interface PatrullerosInterface {
  patrullero_ID: string;
  funcionario_ID: string;
}

export type OperadoresOnetoOnePatrullerosInterface = Omit<OperadoresInterface, "funcionario_ID">;

export interface AsignacionPatrulleroMovilInterface {
  asignacion_movil_ID: string;
  patrullero_ID: string;
  movil_ID: string;
}

export interface MovilInterface {
  movil_ID: string;
  matricula: string;
}

export interface AsignacionPatrulleroReporteInterface {
  asignacion_reporte_ID: string;
  patrullero_ID: string;
  reporte_ID: string;
}

export interface SectorInterface {
  sector_ID: string;
  nombre_sector: string;
  unidad_vecinal: string;
}

export interface SubSectorInterface {
  subsector_ID: string;
  nombre_subsector: string;
  sector_ID: string;
}
