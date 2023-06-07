const express = require("express");
const pool = require("../connection");
const que = require("./RecuQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const createRecu = (request, response) => {
  const {
    Livreur,
    Totalrecu,
    Commission,
    PLivreur,
    PEntreprise,
    Partlivreur,
    PartEntreprise,
    RecuNet,
  } = request.body;
  pool.query(
    que.AddRecu,
    [
      Livreur,
      Totalrecu,
      Commission,
      PLivreur,
      PEntreprise,
      Partlivreur,
      PartEntreprise,
      RecuNet,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json({ message: "Recu added successfully" });
      }
    }
  );
};
module.exports = {
  createRecu,
};
