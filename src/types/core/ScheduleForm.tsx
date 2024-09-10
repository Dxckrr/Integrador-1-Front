interface UserFormSchedule {
  name: string;
  surname: string;
  email: string;
  phone: string;
  CC: string;
}

export interface FormDataSchedule extends UserFormSchedule {
  serviceId: string;
  medicId: string;
  fecha: string;
  hora: string;
}
