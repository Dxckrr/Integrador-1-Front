import { Emergency } from "../../types/core/Emergency";

const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  sends data to create an emergency 
 * @returns a json object (), otherwise catches the error
 * @param {*} data 
 */
export async function add_emergency(data:Emergency) {
    console.log(data)
    try {
        const response = await fetch(`${host}emergencies/create`, {
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
export async function get_all_emergencies() {
    try {
        const response = await fetch(`${host}emergencies/`, { // Ajuste en la URL para llamar al endpoint 'signin'
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