const express = require("express");
const pool = require("../connection");
const que = require("./CaissepQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getCaisse = (request, response) => {
  pool.query(que.getCaisseMonth, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const createCaisse = (request, response) => {
  const {
    NBRLivreur,
    Totalrecu,
    Commission,
    Partlivreur,
    PartEntreprise,
    RecuNet,
    DateAjout,
    Avance,
    Retour,
  } = request.body;
  pool.query(
    que.AddCaisse,
    [
      NBRLivreur,
      Totalrecu,
      Commission,
      Partlivreur,
      PartEntreprise,
      RecuNet,
      DateAjout,
      Avance,
      Retour,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json({ message: "Caisse added successfully" });
      }
    }
  );
};
module.exports = {
  getCaisse,
  createCaisse,
};
