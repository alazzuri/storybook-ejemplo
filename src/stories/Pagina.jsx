import React from "react";

import { Header } from "./Header";
import "./page.css";
import { Boton } from "./Boton";

export const Pagina = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  ...props
}) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section>
      <h2>Hola Mundo desde Storybook</h2>
      <p>
        Con Storybook podemos crear historias para componentes pequeños, pero
        también para páginas enteras.
      </p>
      <p>
        En este caso, estamos construyendo una página que contiene otros
        componentes más pequeños, como el header y el botón.
      </p>
      <Boton {...props} />
    </section>
  </article>
);

Pagina.defaultProps = {
  user: null,
};
