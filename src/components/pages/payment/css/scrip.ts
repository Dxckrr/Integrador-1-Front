// Agrega un listener al evento submit del formulario
document.getElementById('paymentForm')?.addEventListener('submit', function(event) {
    
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtiene los valores ingresados por el usuario
    const holderName = (document.getElementById('holderName') as HTMLInputElement).value;
    const identification = (document.getElementById('identification') as HTMLInputElement).value;
    const totalPayment = "777.500,00"; // Total de pago fijo (puedes cambiarlo según sea necesario)
    const bank = "Bancolombia"; // Banco fijo (puedes cambiarlo según sea necesario)
    
    // Llama a la función para abrir la nueva pestaña con la información
    openPaymentInfo(holderName, identification, bank, totalPayment);
});

// Función para abrir una nueva pestaña con la información de pago
function openPaymentInfo(holderName: string, identification: string, bank: string, totalPayment: string) {
    const newWindow = window.open('', '_blank'); // Abre una nueva pestaña

    // Genera un número de pago aleatorio
    const paymentNumber = Math.floor(Math.random() * 1000000); 