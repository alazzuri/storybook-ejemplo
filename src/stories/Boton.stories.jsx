import React from "react";

// Aqui importamos el componente
import { Boton } from "./Boton";

// El export que sigue nos permite incorporar este archivo como una opción dentro del menú
// lateral. De esta manera, podremos acceder y navegar por las historias de este componente.
export default {
  // Aqui ponemos el nombre bajo el cual se mostrará el componente en el menú lateral, y dentro de que categoría.
  // El orden es: categoria/nombre.
  title: "Ejemplo/Boton",
  component: Boton,
  // Esto nos permite agregar el color picker para poder cambiar el color del boton dentro de la historia.
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// Aquí, construimos un template de nuesto componente que utilizaremos luego para crear las distintas historias.
const Template = (args) => <Boton {...args} />;

// Creamos una historia y le agregamos los args (props) para mostrar el componente de la manera que deseamos.
export const Primario = Template.bind({});
Primario.args = {
  primary: true,
  label: "Botón",
  // Si agregamos un alert, podremos verlo al hacer click en la historia de este boton.
  onClick: () => alert("Hola, soy una alerta"),
};

// Podemos crear varias historias sobre el mismo componente reutilizando el template.
export const Secundario = Template.bind({});
Secundario.args = {
  label: "Botón",
  // También podremos ver este console log en la consola del navegador.
  onClick: () => console.log("Hola, yo soy un console.log"),
};

export const Grande = Template.bind({});
Grande.args = {
  size: "large",
  label: "Botón",
  // Si no agregamos ninguna función al evento onClick, igual podremos ver cuando se dispara desde
  // la pestaña "Actions" en el dashboard de Storybook.
};

export const Pequeno = Template.bind({});
Pequeno.args = {
  size: "small",
  label: "Botón",
};
