const express = require("express");
const pool = require("../connection");
const que = require("./ClientsQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getClients = (request, response) => {
  pool.query(que.getClients, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const createClient = (request, response) => {
  const {
    NomComplet,
    AdressePostale,
    NomAgentTel,
    Telephone,
    Sexe,
    caractere,
    NombreCommande,
    NombreRetour,
    TypeClient,
    Appele,
    DateNaissance,
    DateAppel,
    Proffession,
    Email,
    Commentaire,
  } = request.body;
  pool.query(que.checkTelexistance, [Telephone], (error, results) => {
    if (results.rows.length) {
      response.json({ message: "Client already exist !" });
    } else {
      pool.query(
        que.AddClient,
        [
          NomComplet,
          AdressePostale,
          NomAgentTel,
          Telephone,
          Sexe,
          caractere,
          NombreCommande,
          NombreRetour,
          TypeClient,
          Appele,
          DateNaissance,
          DateAppel,
          Proffession,
          Email,
          Commentaire,
        ],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            response.status(200).json({ message: "Client added successfully" });
          }
        }
      );
    }
  });
};
const updateClient = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    NomComplet,
    AdressePostale,
    NomAgentTel,
    Telephone,
    Sexe,
    caractere,
    NombreCommande,
    NombreRetour,
    TypeClient,
    Appele,
    DateNaissance,
    DateAppel,
    Proffession,
    Email,
    Commentaire,
  } = request.body;
  pool.query(que.getclientbyid, [id], (error, results) => {
    const noclientfound = !results.rows.length;
    if (noclientfound) {
      response.json({ message: "No client found in database" });
    }
  });
  pool.query(
    que.updateclient,
    [
      NomComplet,
      AdressePostale,
      NomAgentTel,
      Telephone,
      Sexe,
      caractere,
      NombreCommande,
      NombreRetour,
      TypeClient,
      Appele,
      DateNaissance,
      DateAppel,
      Proffession,
      Email,
      Commentaire,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Client updated succefully" });
    }
  );
};
const getClientById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getclientbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const deleteClient = (request, response) => {
  const id = parseInt(request.params.id);
    pool.query(que.removeclient, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Client deleted");
    });
};
module.exports = {
  getClients,
  createClient,
  updateClient,
  getClientById,
  deleteClient
};
