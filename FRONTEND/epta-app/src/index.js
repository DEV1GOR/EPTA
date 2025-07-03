// frontend/epta-app/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// Não precisamos mais importar './index.css' aqui, pois estamos usando Styled Components
// e os estilos globais (se houver) podem ser gerenciados de outra forma ou em um componente global.

import App from './App';
// Não precisamos de reportWebVitals para este desafio, então removemos a importação e a chamada.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

