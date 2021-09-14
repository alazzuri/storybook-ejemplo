import React from "react";

import { Header } from "./Header";

export default {
  title: "Ejemplo/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Logueado = Template.bind({});
Logueado.args = {
  user: {},
};

export const Deslogueado = Template.bind({});
Deslogueado.args = {};
