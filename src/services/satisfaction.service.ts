import { Satisfaction } from "../types/Satisfaction";

const host = import.meta.env.VITE_HOST

export async function add_survey(data:Satisfaction) {
    console.log(data)
    try {
        const response = await fetch(`${host}satisfaction/submit`, {
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

export async function get_all_survey_data() {
    try {
        const response = await fetch(`${host}satisfaction/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al obtener la info de las encuestas');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= Hours
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}