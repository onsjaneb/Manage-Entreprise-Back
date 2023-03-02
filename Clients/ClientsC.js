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
  const { NomComplet, Genre, Email, Telephone, Password, Ville, Adresse } =
    request.body;
  pool.query(que.checkEmailexistance, [Email], (error, results) => {
    if (results.rows.length) {
      response.json({ message: "Email already exist !" });
    } else {
      pool.query(
        que.AddClient,
        [NomComplet, Genre, Email, Telephone, Password, Ville, Adresse],
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

module.exports = {
  getClients,
  createClient,
};
