const express = require("express");
const pool = require("../connection");
const que = require("./FichePaieQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const createFiche = (request, response) => {
  const {
    livreur,
    datefiche,
    livraison,
    retour,
    abonnementorange,
    cautionsac,
    livraisongratuite,
    montantbrut,
    montantnet,
  } = request.body;
  pool.query(
    que.AddFichePaie,
    [
      livreur,
      datefiche,
      livraison,
      retour,
      abonnementorange,
      cautionsac,
      livraisongratuite,
      montantbrut,
      montantnet,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json({ message: "Fiche added successfully" });
      }
    }
  );
};
module.exports = {
  createFiche,
};
