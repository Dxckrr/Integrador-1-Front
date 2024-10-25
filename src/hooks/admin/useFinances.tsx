import { useEffect, useState } from "react";
import { get_all_appointments_monetary_record, get_all_appointments_service } from "../../services/core/appointments.service";
import dayjs from "dayjs";
import 'dayjs/locale/es'; 

dayjs.locale('es');

interface appointmentData {
    month_num: number;
    year: number;
    total_income: string;
}
export const useFinances = (service: number) => {
    const [appointmentsData, setAppointmentsData] = useState({
        labels: [],
        data: [],
    });
    // const [months, setMonths] = useState<MonthData[]>([]); 
    const formatData = (appointments: appointmentData[]) => {
        const months = appointments.map((item) => dayjs().month(item.month_num - 1).format("MMMM")); // Convert month number to name
        const income = appointments.map((item) => parseFloat(item.total_income)); // Convert total_income to number
        return { labels: months, data: income }; // Return formatted data for the chart
    };

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await get_all_appointments_service(service);
                const formattedData = formatData(response);
                setAppointmentsData(formattedData); // Set the chart data
            } catch (err) {
                console.error(err);
            }
        };

        if (service) {
            fetchAppointments();
        }
    }, [service]);

    return appointmentsData;
};
interface recordData {
    appointment_date: string;
    service_price: number;
}
export const useMonetaryRecord = () => {
    const [historicData, setHistoricData] = useState<recordData[]>([]);
    const [months, setMonths] = useState<{ monthNumber: number; monthName: string }[]>([]);
    const [filteredData, setFilteredData] = useState<recordData[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await get_all_appointments_monetary_record();
                console.log(response)  // Debugging purposes only. Remove before production.
                const formattedData = response.map((item: recordData) => ({
                    ...item,
                    appointment_date: dayjs(item.appointment_date).format("YYYY-MM-DD") // Assuming you want to format the date
                }));
                const monthsArray = response
                    .map((item: recordData) => ({
                        monthNumber: dayjs(item.appointment_date).month() + 1, // Número del mes (1-12)
                        monthName: dayjs(item.appointment_date).format("MMMM").charAt(0).toUpperCase() + dayjs(item.appointment_date).format("MMMM").slice(1), // Nombre del mes con primera letra en mayúscula
                    }))
                    .filter((value, index, self) =>
                        index === self.findIndex((month) => month.monthNumber === value.monthNumber)
                    ) // Filtra para eliminar duplicados por número de mes
                    .sort((a, b) => a.monthNumber - b.monthNumber); // Ordenar por número de mes

                setMonths(monthsArray)
                setHistoricData(formattedData); // Set the historic data

            } catch (err) {
                console.error(err);
            }
        };
        getAppointments();
    }, []);
    useEffect(() => {
        setFilteredData(historicData) 
        if(selectedMonth === -1){
            setSelectedMonth(null)
            setFilteredData(historicData) 
            return;
        }
        console.log(selectedMonth)
        if (selectedMonth !== null) {
            const filtered = historicData.filter((item) =>
                dayjs(item.appointment_date).month() + 1 === selectedMonth
            );
            setFilteredData(filtered);
        }
    }, [selectedMonth, historicData]);
    console.log(filteredData)
    return { historicData, filteredData, months, setSelectedMonth };
}
