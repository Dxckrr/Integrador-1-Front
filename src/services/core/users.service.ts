
const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  gets the doctors for a service
 * @returns a json object (), otherwise catches the error
 * @param {*} id 
 */
export async function get_doctors(id: number) {
    try {
        const response = await fetch(`${host}users/doctors/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= DOCTORS
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}

export async function get_all_pacients() {
    try {
        const response = await fetch(`${host}users/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse;
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}

export async function get_cv_userPDF(cc : String, idRol : number) {
    try {
        const response = await fetch(`${host}users/getCV/${cc}/${idRol}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al generar PDF');
        }

        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');

        return pdfUrl;
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}

export async function get_history_clinicPDF(cc : String, idCita : number) {
    try {
        const response = await fetch(`${host}users/getHistoryClinic/${cc}/${idCita}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al generar PDF');
        }

        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');

        return pdfUrl;
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}

export async function get_medic_orderPDF(id : number) {
    try {
        const response = await fetch(`${host}users/getOrder/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error(`Error al generar PDF: ${response.statusText}`);
        }

        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');

        return pdfUrl;
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}
