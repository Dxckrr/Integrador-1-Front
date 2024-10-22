import dayjs from 'dayjs';
/**
 * 
 * @returns array of hours within 5 am - 17 pm , intervals of 30 minutes
 */
export const getHours = () => {
    const horas = [];
    let inicio = dayjs().hour(5).minute(0);
    const fin = dayjs().hour(17).minute(0);

    while (inicio.isBefore(fin) || inicio.isSame(fin)) {
        horas.push(inicio.format('HH:mm'));
        inicio = inicio.add(30, 'minute');
    }

    return horas;
}
/**
 * 
 * @param selectedDate 
 * @returns date on yy-mm-dd format
 */
export const formatDate = (selectedDate) => {
    const year = selectedDate ? selectedDate.$y : null;
    const month = selectedDate ? selectedDate.$M + 1 : null; // El mes es zero-based, por eso sumamos 1
    const day = selectedDate ? selectedDate.$D : null;
    return `${year}-${month}-${day}`;
};