


const db = require('../db');


exports.getAll = (req, res) => {
  db.query('SELECT * FROM achados', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  const {
    nome,
    descricao,
    tipo_id,
    local_encontrado,
    data_achado,
    nome_pessoa,
    foto_url,
  } = req.body;

  db.query(
    `INSERT INTO achados
     (nome, descricao, tipo_id, local_encontrado, data_achado, nome_pessoa, foto_url)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nome, descricao, tipo_id, local_encontrado, data_achado, nome_pessoa, foto_url],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ id: result.insertId });
    }
  );
};


exports.update = (req, res) => {
  const {
    nome,
    descricao,
    tipo_id,
    local_encontrado,
    data_achado,
    nome_pessoa,
    foto_url,
  } = req.body;

  const id = req.params.id;

  db.query(
    `UPDATE achados SET
     nome=?, descricao=?, tipo_id=?, local_encontrado=?, data_achado=?, nome_pessoa=?, foto_url=?
     WHERE id=?`,
    [nome, descricao, tipo_id, local_encontrado, data_achado, nome_pessoa, foto_url, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
};


exports.remove = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM achados WHERE id=?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};
