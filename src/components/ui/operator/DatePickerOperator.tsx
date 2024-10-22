import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
// import { useStepperContext as useStepperSchedule } from "../../../context/schedule/ScheduleStepperContext";

import { useState } from "react";
import { formatDate } from "../../../utils/hours";

export default function HelperText({ setValue, className }) {
  const isWeekend = (date: Dayjs) => {
    const day = date.day();
    return day === 0 || day === 6;
  };

  const [date, setDate] = useState<Dayjs | null>(null);
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
              className={className}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}
