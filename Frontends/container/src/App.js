// Frontends/Container/src/App.js
import React from 'react';
import RelojApp from 'reloj-app';
import ClimaApp from 'clima-app';


function ContainerApp() {
  return (
    <div>
      <h1>Aplicación Container</h1>
      <div>
        <h2>Aplicación de Reloj</h2>
        <RelojApp />
      </div>
      <div>
        <h2>Aplicación de Clima</h2>
        <ClimaApp />
      </div>
    </div>
  );
}

export default ContainerApp;
