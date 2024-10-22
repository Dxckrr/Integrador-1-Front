const host = import.meta.env.VITE_HOST

/**
 * Get a medical authorization
 * @returns appointments otherwise throws an error
 */
export async function getAuthorizationById(id:number) {
    try {
        const response = await fetch(`${host}authorization/id/${id}`, { // Ajuste en la URL para llamar al endpoint 'signin'
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
export async function updateAuthorization(id:number) {
    try {
        const response = await fetch(`${host}authorization/update/${id}`, {
            method: "PUT",
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