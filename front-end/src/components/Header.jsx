import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Catálogo de Filmes</h1>
      <nav>
        <Link to="/">Filmes</Link>
        <Link to="/cadastro">Cadastrar</Link>
        <Link to="/generos">Gêneros</Link>
      </nav>
    </header>
  );
}

export default Header;
