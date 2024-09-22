import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function AppointmentModal({ title, description }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          className={`animate-fade-in animate-iteration-count-once absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto border-2 rounded-xl shadow-lg p-2 bg-gradient-to-r from-[#34A192] to-[#3FBA57] `}>
          <div
            role="alert"
            className="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4">
                  <path
                    fill-rule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>

              <p className="font-medium sm:text-2xl text-emerald-600">
                {title}!
              </p>
            </div>

            <p className="mt-4 text-gray-600">{description}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
