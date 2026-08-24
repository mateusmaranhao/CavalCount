/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';
import { ServicosFiscais } from './pages/servicos/ServicosFiscais';
import { ServicosContabeis } from './pages/servicos/ServicosContabeis';
import { FolhaPagamento } from './pages/servicos/FolhaPagamento';
import { ImpostoRenda } from './pages/servicos/ImpostoRenda';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="servicos/servicos-fiscais" element={<ServicosFiscais />} />
            <Route path="servicos/servicos-contabeis" element={<ServicosContabeis />} />
            <Route path="servicos/folha-de-pagamento" element={<FolhaPagamento />} />
            <Route path="servicos/imposto-de-renda" element={<ImpostoRenda />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}


