// import React, { useEffect, useState } from 'react';

// function Vitrine() {
//   const [achados, setAchados] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/achados')
//       .then(res => res.json())
//       .then(data => setAchados(data))
//       .catch(err => console.error('Erro ao buscar achados:', err));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>📦 Objetos Achados</h1>
//       <a href="/cadastro">Cadastrar novo objeto</a>
//       <ul>
//         {achados.map(item => (
//           <li key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
//             <strong>{item.nome}</strong><br />
//             {item.descricao}<br />
//             Tipo ID: {item.tipo_id}<br />
//             Local: {item.local_encontrado}<br />
//             Data: {new Date(item.data_achado).toLocaleDateString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Vitrine;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Vitrine.css'; // vamos criar esse CSS

// function Vitrine() {
//   const [achados, setAchados] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/achados')
//       .then(response => setAchados(response.data))
//       .catch(error => console.error('Erro ao buscar objetos:', error));
//   }, []);

//   return (
//     <div className="vitrine-container">
//       <h1>Objetos Encontrados</h1>
//       <div className="cards-container">
//         {achados.map(obj => (
//           <div className="card" key={obj.id}>
//             <h2>{obj.nome}</h2>
//             <p><strong>Descrição:</strong> {obj.descricao}</p>
//             <p><strong>Local:</strong> {obj.local_encontrado}</p>
//             <p><strong>Data:</strong> {new Date(obj.data_achado).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Vitrine;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Vitrine.css';

// function Vitrine() {
//   const [achados, setAchados] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/achados')
//       .then(response => setAchados(response.data))
//       .catch(error => console.error('Erro ao buscar objetos:', error));
//   }, []);

//   return (
//     <div className="vitrine-container">
//       <h1>Objetos Encontrados</h1>
//       <div className="cards-container">
//         {achados.map(obj => (
//           <div className="card" key={obj.id}>
//             <h2>{obj.nome}</h2>
//             <p><strong>Descrição:</strong> {obj.descricao}</p>
//             <p><strong>Tipo ID:</strong> {obj.tipo_id}</p>
//             <p><strong>Local encontrado:</strong> {obj.local_encontrado}</p>
//             <p><strong>Data do achado:</strong> {new Date(obj.data_achado).toLocaleDateString()}</p>
//             <p><strong>Quem encontrou:</strong> {obj.nome_pessoa}</p>
//             <p><strong>Observações:</strong> {obj.observacoes || 'Nenhuma'}</p>

//             {obj.foto_url && (
//               <div className="imagem-container">
//                 <img src={obj.foto_url} alt={`Foto de ${obj.nome}`} className="foto-objeto" />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Vitrine;












//funcionando 




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Vitrine.css';

// function Vitrine() {
//   const [achados, setAchados] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/achados')
//       .then(response => setAchados(response.data))
//       .catch(error => console.error('Erro ao buscar objetos:', error));
//   }, []);

//   return (
//     <div className="vitrine-container">
//       <h1>Objetos Encontrados</h1>
//       <div className="cards-container">
//         {achados.map(obj => (
//           <div className="card" key={obj.id}>
//             {obj.foto_url ? (
//               <img
//                 src={obj.foto_url}
//                 alt={`Foto de ${obj.nome}`}
//                 className="foto-objeto"
//               />
//             ) : (
//               <div className="foto-objeto" style={{ background: '#ddd' }} />
//             )}
//             <div className="card-content">
//               <h2>{obj.nome}</h2>
//               <p><strong>Descrição:</strong> {obj.descricao}</p>
//               <p><strong>Local:</strong> {obj.local_encontrado}</p>
//               <p><strong>Data:</strong> {new Date(obj.data_achado).toLocaleDateString()}</p>
//               <p><strong>Quem encontrou:</strong> {obj.nome_pessoa}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Vitrine;













import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vitrine.css';

function Vitrine() {
  const [achados, setAchados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/achados')
      .then(response => setAchados(response.data))
      .catch(error => console.error('Erro ao buscar objetos:', error));
  }, []);

  return (
    <div className="vitrine-container">
      <header className="vitrine-header">
        <h1>🧭 Achados & Perdidos</h1>
        <p>Veja os objetos encontrados e procure o que é seu!</p>
      </header>

      <div className="cards-container">
        {achados.map(obj => (
          <div className="card" key={obj.id}>
            {obj.foto_url ? (
              <img
                src={obj.foto_url}
                alt={`Foto de ${obj.nome}`}
                className="foto-objeto"
              />
            ) : (
              <div className="foto-objeto" style={{ background: '#ccc' }} />
            )}
            <div className="card-content">
              <h2>{obj.nome}</h2>
              <p><strong>Descrição:</strong> {obj.descricao}</p>
              <p><strong>Local:</strong> {obj.local_encontrado}</p>
              <p><strong>Data:</strong> {new Date(obj.data_achado).toLocaleDateString()}</p>
              <p><strong>Quem encontrou:</strong> {obj.nome_pessoa || 'Não informado'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitrine;
