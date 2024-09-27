interface UserFormSchedule {
  name: string;
  surname: string;
  email: string;
  phone: string;
  CC: string;
}

export interface FormDataSchedule extends UserFormSchedule {
  id?: number;
  dia: Date;
  hora: string;
  estadoCita: boolean;
  idServicio: number;
  idHistoria_Medica: number;
  idUsuarioCC: string;
  idDocCC: string;
}
