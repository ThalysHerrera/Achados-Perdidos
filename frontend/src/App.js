// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Vitrine from './Vitrinetemp';
// import Cadastro from './Cadastro';
// import ObjetosUsuario from './objetosUsuario';  
// import './App.css'; // Importando o CSS para estilização

// function App() {
//   return (
//     <Router>
//       {
      
//       <nav className="navbar">
//   <div className="navbar-left">
//     <Link to="/">🏠 Início</Link>
//   </div>
//   <div className="navbar-right">
//     <Link to="/cadastro">➕ Cadastrar Objeto</Link>
//     <Link to="/meus-objetos">👤 O Objeto é Meu</Link>
//   </div>
// </nav>
// }

// <footer className="footer">
//   <p>© {new Date().getFullYear()} Achados & Perdidos — Todos os direitos reservados.</p>
// </footer>

//       <Routes>
//         <Route path="/" element={<Vitrine />} />
//         <Route path="/cadastro" element={<Cadastro />} />
//         <Route path="/meus-objetos" element={<ObjetosUsuario />} />
//       </Routes>
//     </Router>
//   );

// }

// export default App;










// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Vitrine from './Vitrinetemp';
import Cadastro from './Cadastro';
import ObjetosUsuario from './objetosUsuario';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">🏠 Início</Link>
          </div>
          <div className="navbar-right">
            <Link to="/cadastro">➕ Cadastrar Objeto</Link>
            <Link to="/meus-objetos">👤 O Objeto é Meu</Link>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Vitrine />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/meus-objetos" element={<ObjetosUsuario />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Achados & Perdidos — Todos os direitos reservados.  UNOESTE 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
