import { useState } from "react";
import { call_chat_bot } from "../../../services/chat_bot.service";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ChatBot = ({ onClose }) => {
  const [messageInput, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "Hola! Soy la IA de Sanavit, escribe el nombre de algun sintoma u enfermedad para saber más información" },
  ]);
  const [isLoading, setIsLoading] = useState(false); // Loading statussss

  const handleSendMessage = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      try {
        // Agrega el mensaje del usuario a la historia del chat
        const userMessage = { sender: "user", message: messageInput };
        setChatHistory([...chatHistory, userMessage]);

        // Limpia el input
        setMessage("");

        // Agrega un mensaje temporal del bot
        const temporaryMessage = {
          sender: "bot",
          message: "...",
        };
        setChatHistory((prevHistory) => [...prevHistory, temporaryMessage]);

        // Establece isLoading a true
        setIsLoading(true);

        // Llama al chatbot
        const response = await call_chat_bot(messageInput);
        if (response) {
          // Elimina el mensaje temporal
          setChatHistory((prevHistory) => {
            const filteredHistory = prevHistory.slice(
              0,
              prevHistory.length - 1
            );
            const botMessage = { sender: "bot", message: response.response };
            return [...filteredHistory, botMessage];
          });
        } else {
          console.log("ERRRRRRRRR");
        }
      } catch (e) {
        console.log("Error", e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-16 right-4 w-80 bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center my-2">
        <h3 className="font-bold">Chat</h3>
        <button onClick={onClose} className="text-red-500">
          <XMarkIcon className="size-6" />
        </button>
      </div>
      <div className="h-72 overflow-y-scroll pr-5">
        {chatHistory.map((entry, index) => (
          <p key={index} className="flex py-2">
            <span
              className={
                entry.sender === "user"
                  ? "text-blue-500 ml-auto "
                  : "text-green-500"
              }>
              {entry.sender === "user" ? "Tú: " : "vitBot: "}
            </span>
            <span className="text-black pl-2">{`${entry.message}`}</span>
          </p>
        ))}
      </div>
      <footer className="flex gap-x-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleSendMessage}
          placeholder="Escribe un mensaje..."
          className="w-full  mt-2 border p-2 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="mt-2 w-full bg-blue-500 text-white px-2 py-1 rounded flex-1"
          disabled={isLoading} // Deshabilita el botón si isLoading es true
        >
          {isLoading ? "Cargando..." : "Enviar"}{" "}
        </button>
      </footer>
    </div>
  );
};

export default ChatBot;
