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