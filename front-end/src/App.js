import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroFilme from './pages/CadastroFilme';
import EditarFilme from './pages/EditarFilme';
import Generos from './pages/Generos';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroFilme />} />
          <Route path="/editar/:id" element={<EditarFilme />} />
          <Route path="/generos" element={<Generos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
