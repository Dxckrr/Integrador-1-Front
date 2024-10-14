const host = import.meta.env.VITE_HOST

/**
 * 
 * @returns all stadistics needed for admin module
 */
export async function get_stadistics() {
    try {
        const response = await fetch(`${host}stadistics/`, {
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