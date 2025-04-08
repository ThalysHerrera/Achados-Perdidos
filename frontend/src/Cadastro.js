// // src/Cadastro.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Cadastro.css';

// function Cadastro() {
//   const [nome, setNome] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [tipoId, setTipoId] = useState('');
//   const [local, setLocal] = useState('');
//   const [data, setData] = useState('');
//   const [tipos, setTipos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/tiposobjetos')
//       .then(response => setTipos(response.data))
//       .catch(error => console.error('Erro ao carregar tipos:', error));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const novoObjeto = {
//       nome,
//       descricao,
//       tipo_id: tipoId,
//       local_encontrado: local,
//       data_achado: data
//     };

//     axios.post('http://localhost:4000/achados', novoObjeto)
//       .then(() => {
//         alert('Objeto cadastrado com sucesso!');
//         setNome('');
//         setDescricao('');
//         setTipoId('');
//         setLocal('');
//         setData('');
//       })
//       .catch(error => {
//         console.error('Erro ao cadastrar objeto:', error);
//         alert('Erro ao cadastrar.');
//       });
//   };

//   return (
//     <div className="cadastro-container">
//       <h2>Cadastrar Objeto Achado</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nome"
//           value={nome}
//           onChange={e => setNome(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Descrição"
//           value={descricao}
//           onChange={e => setDescricao(e.target.value)}
//           required
//         />
//         <select
//           value={tipoId}
//           onChange={e => setTipoId(e.target.value)}
//           required
//         >
//           <option value="">Selecione o tipo</option>
//           {tipos.map(tipo => (
//             <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Local encontrado"
//           value={local}
//           onChange={e => setLocal(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={data}
//           onChange={e => setData(e.target.value)}
//           required
//         />
//         <button type="submit">Cadastrar</button>
//       </form>
//     </div>
//   );
// }

// export default Cadastro;











// src/Cadastro.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';





function Cadastro() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoId, setTipoId] = useState('');
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [nomePessoa, setNomePessoa] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [tipos, setTipos] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:4000/tiposObjetos')
      .then(response => setTipos(response.data))
      .catch(error => console.error('Erro ao carregar tipos:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoObjeto = {
      nome,
      descricao,
      tipo_id: tipoId,
      local_encontrado: local,
      data_achado: data,
      nome_pessoa: nomePessoa,
      foto_url: fotoUrl,

    };

    // axios.post('http://localhost:4000/achados', novoObjeto)
    //   .then(() => {
    //     alert('Objeto cadastrado com sucesso!');
    //     setNome('');
    //     setDescricao('');
    //     setTipoId('');
    //     setLocal('');
    //     setData('');
    //     setNomePessoa('');
    //     setFotoUrl('');

    //   })
    //   .catch(error => {
    //     console.error('Erro ao cadastrar objeto:', error);
    //     alert('Erro ao cadastrar.');
    //   });
    console.log('Enviando objeto:', novoObjeto);

    axios.post('http://localhost:4000/achados', novoObjeto)
  .then(() => {
    alert('Objeto cadastrado com sucesso!');
    setNome('');
    setDescricao('');
    setTipoId('');
    setLocal('');
    setData('');
    setNomePessoa('');
    setFotoUrl('');
    navigate('/'); // redireciona para a vitrine
  })
  .catch(error => {
    console.error('Erro ao cadastrar objeto:', error);
    alert('Erro ao cadastrar.');
  });

  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Objeto Achado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          required
        />
        <select
          value={tipoId}
          onChange={e => setTipoId(e.target.value)}
          required
        >
          <option value="">Selecione o tipo</option>
          {tipos.map(tipo => (
            <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Local encontrado"
          value={local}
          onChange={e => setLocal(e.target.value)}
          required
        />
        <input
          type="date"
          value={data}
          onChange={e => setData(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome da pessoa que encontrou"
          value={nomePessoa}
          onChange={e => setNomePessoa(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL da foto"
          value={fotoUrl}
          onChange={e => setFotoUrl(e.target.value)}
          required
        />
       
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
