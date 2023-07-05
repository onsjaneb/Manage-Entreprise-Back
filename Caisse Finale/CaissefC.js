const express = require("express");
const pool = require("../connection");
const que = require("./CaissefQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createDepense = (request, response) => {
  const { Montant, Motif, Date } = request.body;
  pool.query(que.AddDepense, [Montant, Motif, Date], (error, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json({ message: "Depense added successfully" });
    }
  });
};
