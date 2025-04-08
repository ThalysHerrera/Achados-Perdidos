






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
