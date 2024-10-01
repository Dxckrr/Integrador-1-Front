import React from "react";
import HeaderEspecialista from "../especialista_components/Header";

const EspecialistaLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      {/* Header visible en todas las rutas del especialista */}
      <HeaderEspecialista />
      {/* Contenido de la ruta activa */}
      <main>{children}</main>
    </div>
  );
};

export default EspecialistaLayout;
