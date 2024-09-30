import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { cancel_appointment } from "../../../services/core/appointments.service";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

export default function CancelModal({ isModalOpen, idAppointment }) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const deleteAppointment = async () => {
    setLoading(true);
    try {
      if (idAppointment) {
        const response = await cancel_appointment(idAppointment);
        if (response) {
          setSuccess(true);
        } else {
          setError(true);
        }
      }
    } catch (e) {
      setError(true);
      console.log("Error", e);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setOpen(false);
        isModalOpen(false);
        window.location.reload();
      }, 3000);
    }
  };

  const handleClose = () => {
    setOpen(false);
    isModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
          {/* Muestra un loader mientras se procesa la eliminación */}
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}>
              <CircularProgress />
            </Box>
          ) : success ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}>
              {/* Ícono de éxito */}
              <CheckCircleIcon className="size-10" />
              <Typography
                id="delete-modal-title"
                variant="h5"
                component="h2"
                sx={{ mt: 2, color: "green" }}>
                ¡Cita eliminada con éxito!
              </Typography>
              <Typography id="delete-modal-description" sx={{ mt: 1 }}>
                La cita con el ID <strong>{idAppointment}</strong> ha sido
                eliminada correctamente.
              </Typography>
            </Box>
          ) : error ? (
            <Typography
              id="delete-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
              color="error">
              Error al eliminar la cita. Intenta nuevamente.
            </Typography>
          ) : (
            <>
              <Typography
                id="delete-modal-title"
                variant="h6"
                component="h2"
                gutterBottom>
                ¿Quieres eliminar esta cita?
              </Typography>
              <Typography id="delete-modal-description" sx={{ mt: 2, mb: 3 }}>
                Al dar click en "eliminar", estarás eliminando la cita con id{" "}
                <span className="font-semibold">{idAppointment}</span> y no
                podrás recuperarla.
              </Typography>
              <Typography id="delete-modal-description" sx={{ mt: 2, mb: 3 }}>
                Para confirmar escribe
                <span className="font-semibold">"Borrar"</span>
                <input
                  type="text"
                  className="border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 font-light w-full mt-2"
                  onChange={(event) => {
                    const value = event.target.value.trim().toUpperCase();
                    setConfirmation(value === "BORRAR");
                  }}
                />
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button onClick={handleClose} variant="outlined">
                  Cancelar
                </Button>
                {confirmation && (
                  <Button
                    onClick={() => deleteAppointment()}
                    variant="contained"
                    color="error">
                    Eliminar
                  </Button>
                )}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
