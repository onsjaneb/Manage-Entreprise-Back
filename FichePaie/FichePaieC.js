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
const Ficheparld = (request, response) => {
  const livreur = request.params.livreur;
  const Datedebut = new Date(request.params.Datedebut);
  const Datefin = new Date(request.params.Datefin);
  pool.query(
    que.getficheparld,
    [livreur, Datedebut, Datefin],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getFicheById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getfichebyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
module.exports = {
  createFiche,
  Ficheparld,
  getFicheById,
};
