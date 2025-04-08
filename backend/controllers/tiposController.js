const db = require('../db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM tiposObjetos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
