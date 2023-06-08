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
const createTempsV = (request, response) => {
  const { DateAjout, Validation } = request.body;
  pool.query(que.AddTempsV, [DateAjout, Validation], (error, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json({ message: "TempsV added successfully" });
    }
  });
};
const getValidation = (request, response) => {
  pool.query(que.getTempsV, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat = (request, response) => {
  pool.query(que.stat, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat1 = (request, response) => {
  pool.query(que.stat1, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat2 = (request, response) => {
  pool.query(que.stat2, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat3 = (request, response) => {
  pool.query(que.stat3, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat4 = (request, response) => {
  pool.query(que.stat4, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat5 = (request, response) => {
  pool.query(que.stat5, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getStat6 = (request, response) => {
  pool.query(que.stat6, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
module.exports = {
  getCaisse,
  createCaisse,
  createTempsV,
  getValidation,
  getStat,
  getStat1,
  getStat2,
  getStat3,
  getStat4,
  getStat5,
  getStat6,
};
