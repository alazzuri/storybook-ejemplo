import React from "react";

import "./boton.css";

/**
 * Este es el componente principal al cual le vamos a escribir la historia.
 */
export const Boton = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

// Aqui declaramos unas props por defecto para inicializar nuestro componente.
Boton.defaultProps = {
  backgroundColor: null,
  primary: false,
  label: "Button",
  size: "medium",
  onClick: undefined,
};

// Ahora, puedes revisar el archivo Button.stories.jsx
