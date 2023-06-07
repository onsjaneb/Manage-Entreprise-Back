const express = require("express");
const pool = require("../connection");
const que = require("./LivreurQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getLivreur = (request, response) => {
  pool.query(que.getLivreurs, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const createLivreur = (request, response) => {
  const {
    NomComplet,
    Telephone,
    AdressePostale,
    Type,
    Pourcentage,
    DateAjout,
  } = request.body;
  pool.query(
    que.AddLivreur,
    [NomComplet, Telephone, AdressePostale, Type, Pourcentage, DateAjout],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json({ message: "Livreur added successfully" });
      }
    }
  );
};
const updateLivreur = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    NomComplet,
    Telephone,
    AdressePostale,
    Type,
    Pourcentage,
    DateAjout,
  } = request.body;
  pool.query(
    que.UpdateLivreur,
    [NomComplet, Telephone, AdressePostale, Type, Pourcentage, DateAjout, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Livreur updated succefully" });
    }
  );
};
const getLivreurById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getlivreurbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const deleteLivreur = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.removelivreur, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json("Livreur deleted");
  });
};
module.exports = {
  getLivreur,
  createLivreur,
  updateLivreur,
  getLivreurById,
  deleteLivreur,
};
