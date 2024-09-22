import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
import { useStepperContext } from "../../../context/schedule/ScheduleStepperContext";
import { useState } from "react";
import { formatDate } from "../../../utils/hours";

export default function HelperText() {
  const isWeekend = (date: Dayjs) => {
    const day = date.day();
    return day === 0 || day === 6;
  };

  const [date, setDate] = useState<Dayjs | null>(null);
  const { setValue } = useStepperContext(); // Asegúrate de que register está disponible
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast
        shouldDisableDate={isWeekend}
        value={date}
        onChange={(newValue) => setValue("dia", formatDate(newValue))}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              placeholder="Selecciona una fecha"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white border-0 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}
