import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { EditarCliente } from './paginas/EditarCliente';
import { Inicio } from './paginas/Inicio';
import { NuevoCliente } from './paginas/NuevoCliente';
import { VerCliente } from './paginas/VerCliente';


//json-server --watch db.json --port 4000 para iniciar el servidor local

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={ <Layout/> }>
          <Route index element={ <Inicio /> }/>
          <Route path='nuevo' element={ <NuevoCliente /> }/>
          <Route path='editar/:id' element={ <EditarCliente /> }/>
          <Route path=':id' element={ <VerCliente /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
 