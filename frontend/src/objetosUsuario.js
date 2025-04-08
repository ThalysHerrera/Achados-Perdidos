// src/ObjetosUsuario.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './objetosUsuario.css'; // Você pode criar esse CSS para estilizar

function ObjetosUsuario() {
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/achados')
      .then(response => setObjetos(response.data))
      .catch(error => console.error('Erro ao buscar objetos:', error));
  }, []);

  const excluirObjeto = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este objeto?')) {
      axios.delete(`http://localhost:4000/achados/${id}`)
        .then(() => {
          setObjetos(objetos.filter(obj => obj.id !== id));
          alert('Objeto excluído com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao excluir objeto:', error);
          alert('Erro ao excluir.');
        });
    }
  };

  return (
    <div className="objetos-usuario-container">
      <h2>Meus Objetos Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Local</th>
            <th>Data</th>
            <th>Quem encontrou</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {objetos.map(obj => (
            <tr key={obj.id}>
              <td>
                {obj.foto_url ? (
                  <img src={obj.foto_url} alt={obj.nome} width="80" />
                ) : (
                  'Sem imagem'
                )}
              </td>
              <td>{obj.nome}</td>
              <td>{obj.descricao}</td>
              <td>{obj.local_encontrado}</td>
              <td>{new Date(obj.data_achado).toLocaleDateString()}</td>
              <td>{obj.nome_pessoa}</td>
              <td>
                <button onClick={() => excluirObjeto(obj.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ObjetosUsuario;
