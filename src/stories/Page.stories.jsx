import React from "react";

import { Pagina } from "./Pagina";
import * as HeaderStories from "./Header.stories";
import * as BotonStories from "./Boton.stories";

export default {
  title: "Ejemplo/Página",
  component: Pagina,
};

const Template = (args) => <Pagina {...args} />;

export const Logueado = Template.bind({});
Logueado.args = {
  // Podemos reutilizar las propiedades de otras historias para editar
  // los componentes que usamos en la página.
  ...HeaderStories.Logueado.args,
  ...BotonStories.Primario.args,
  // Y customizar lo que queramos para este caso en particular.
  label: "Hola, aqui estoy de nuevo",
};

export const Deslogueado = Template.bind({});
Deslogueado.args = {
  ...HeaderStories.Deslogueado.args,
  ...BotonStories.Secundario.args,
  label: "Y aquí también : )",
};
