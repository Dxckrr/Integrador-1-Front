import { FormDataSchedule } from "../../types/core/ScheduleForm";

const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  sends data to create an appointment 
 * @returns a json object (), otherwise catches the error
 * @param {*} data 
 */
export async function add_appointment(data:FormDataSchedule) {
    console.log(data)
    try {
        const response = await fetch(`${host}appointments/create`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= CITA
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * 
 * @returns all existing appointments that haven't been taken
 */
export async function get_all_appointments() {
    try {
        const response = await fetch(`${host}appointments/`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "GET",
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al obtener citas.');
        }
        
        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * 
 * @returns all appointments related to an user's id
 */
export async function get_all_appointments_by_id(id:number) {
    try {
        const response = await fetch(`${host}appointments/user/${id}`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "GET",
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al obtener citas.');
        }
        
        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * @param id appointment
 * @param data to updataed
 * @returns updates an appointment
 */
export async function update_appointment(id:number, data) {   //DATA => ID CITA, DIA, HORA
    try {
        console.log(data)
        const response = await fetch(`${host}appointments/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * 
 * @param id appointment
 * @returns deletes an appointment by its id
 */
export async function cancel_appointment(id) {
    try {
        const response = await fetch(`${host}appointments/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * 
 * @param id service
 * @returns gets all appointments by its service id
 */
export async function get_all_appointments_service(service : number | null) {
    try {
        const response = await fetch(`${host}appointments/service/${service}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al obtener las citas');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}

/**
 * 
 * @param 
 * @returns gets all appointments with the month and price it has
 */
export async function get_all_appointments_monetary_record() {
    try {
        const response = await fetch(`${host}appointments/all/price`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al obtener las citas');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}

