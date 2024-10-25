interface User {
    CC: string;
    nombreUsuario: string;
    apellidoUsuario: string;
    emailUsuario: string;
    pwdUsuario: string;

    // idSede: number | null; -> 3
    // idRol: number; -> Sanavit
    idEspecialidad: number | null;
    // idTipoPaciente: number | null;
}
interface CV {
    direccion: string;                        // Dirección del usuario
    telefonoUsuario: string;                  // Teléfono del usuario
    idEps: string;                            // ID de EPS (tipo de documento)
    tipo_documento: 'CC' | 'TI' | 'RC' | 'CE';// Tipo de documento (enumerado)
    sexo: 'M' | 'F';                          // Sexo del usuario ('M' para masculino, 'F' para femenino)
    nacionalidad: string;                     // Nacionalidad del usuario
    pais: string;                             // País de origen del usuario
    fecha_nacimiento: Date;                   // Fecha de nacimiento del usuario
    lugar_nacimiento: string;                 // Lugar de nacimiento
    alergias: string;                         // Alergias del usuario (cadena larga)
    discapacidad: string;                     // Discapacidad (cadena larga)

    // Información de contacto de emergencia
    contacto_emergencia_nombre: string;       // Nombre del contacto de emergencia
    contacto_emergencia_parentesco: string;   // Parentesco del contacto de emergencia
    contacto_emergencia_telefono: string;     // Teléfono del contacto de emergencia
    contacto_emergencia_correo: string;       // Correo del contacto de emergencia

    cargo: string;                            // Cargo del usuario
    fechaIngreso: Date;                       // Fecha de ingreso al trabajo
    tipoContrato: 'Indefinido' | 'Fijo' | 'Prestación de servicios'; // Tipo de contrato (enumerado)

    // Información salarial
    salarioBasico: number;                    // Salario básico (decimal)
    bonificaciones: number;                   // Bonificaciones (decimal)
    deducciones: number;                      // Deducciones (decimal)
    salarioNeto: number;                      // Salario neto (decimal)
    fechaPago: Date;                          // Fecha de pago

    // Otros detalles laborales
    metodoPago: string;                       // Método de pago (cadena corta)
    vacacionesPendientes: number;             // Vacaciones pendientes (días)
    diasIncapacidad: number;                  // Días de incapacidad
    historialPagos: string;                   // Historial de pagos (cadena larga)
    autorizacionesEspeciales: string;         // Autorizaciones especiales (cadena larga)
    fechaTerminacion: Date | null;            // Fecha de terminación (opcional)
    motivoTerminacion: string;                // Motivo de terminación (cadena larga)
    observaciones: string;                    // Observaciones adicionales (cadena larga)
}


export interface RegisterPacient extends User, CV {
    estadoUsuario: number;

}