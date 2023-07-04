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
const CheckTelExistance = (request, response) => {
  const Telephone = request.params.Telephone;
  pool.query(que.checkTelexistance, [Telephone], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const CheckNameExistance = (request, response) => {
  const NomComplet = request.params.NomComplet;
  pool.query(que.checkNameexistance, [NomComplet], (error, results) => {
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
    Nbrannulation,
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
          Nbrannulation,
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
    Nbrannulation,
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
      Nbrannulation,
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
const getClientFidele = (request, response) => {
  const Type = "Fidéle";
  pool.query(que.getclientbyType, [Type], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getClientMoyen = (request, response) => {
  const Type = "Moyen";
  pool.query(que.getclientbyType, [Type], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getClientNouveau = (request, response) => {
  const Type = "Nouveau";
  pool.query(que.getclientbyType, [Type], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getClientGentil = (request, response) => {
  const caractere = "Gentil";
  pool.query(que.getclientbyCar, [caractere], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getClientMechant = (request, response) => {
  const caractere = "Méchant";
  pool.query(que.getclientbyCar, [caractere], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getClientNormal = (request, response) => {
  const caractere = "Normal";
  pool.query(que.getclientbyCar, [caractere], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
module.exports = {
  getClients,
  createClient,
  updateClient,
  getClientById,
  deleteClient,
  getClientFidele,
  getClientMoyen,
  getClientNouveau,
  getClientGentil,
  getClientMechant,
  getClientNormal,
  CheckTelExistance,
  CheckNameExistance,
};
