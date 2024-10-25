const chat_bot_service = import.meta.env.VITE_CHAT_BOT
/**
 * 
 * @param data message -> input
 * @returns response from chatBot
 */
export async function call_chat_bot(data: string) {
    console.log(chat_bot_service)
    console.log(data)
    try {
        const response = await fetch(`${chat_bot_service}`, {
            method: "POST",
            body: JSON.stringify({ message: data }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!response.ok) {
            throw new Error('Error en el proceso');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}