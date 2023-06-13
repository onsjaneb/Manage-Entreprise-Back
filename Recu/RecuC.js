const express = require("express");
const pool = require("../connection");
const que = require("./RecuQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getRecu = (request, response) => {
  pool.query(que.getRechTod, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
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
    DateAjout,
    Avance,
    Retour,
    Statut,
    Fraislivraison,
    DateCompta,
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
      DateAjout,
      Avance,
      Retour,
      Statut,
      Fraislivraison,
      DateCompta,
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
const updateRecu = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    Livreur,
    Totalrecu,
    Commission,
    PLivreur,
    PEntreprise,
    Partlivreur,
    PartEntreprise,
    RecuNet,
    DateAjout,
    Avance,
    Retour,
    Statut,
    Fraislivraison,
    DateCompta,
  } = request.body;
  pool.query(
    que.updaterecu,
    [
      Livreur,
      Totalrecu,
      Commission,
      PLivreur,
      PEntreprise,
      Partlivreur,
      PartEntreprise,
      RecuNet,
      DateAjout,
      Avance,
      Retour,
      Statut,
      Fraislivraison,
      DateCompta,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Recu updated succefully" });
    }
  );
};
const deleteRecu = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.removeRecu, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json("Recu deleted");
  });
};
const getTotalRecuTod = (request, response) => {
  pool.query(que.sumTotalRecu, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getSumPartlivreur = (request, response) => {
  pool.query(que.sumPartLivreur, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getSumPartEntreprise = (request, response) => {
  pool.query(que.sumPartEntreprise, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getSumCommission = (request, response) => {
  pool.query(que.sumCommission, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getsUMRecuNet = (request, response) => {
  pool.query(que.sumRecuNet, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getSumAvance = (request, response) => {
  pool.query(que.sumAvance, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getRetour = (request, response) => {
  pool.query(que.sumRetour, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const NbrLivreur = (request, response) => {
  pool.query(que.sumLivreur, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const RecuFiche = (request, response) => {
  const Livreur = request.params.Livreur;
  const Datedebut = new Date(request.params.Datedebut);
  const Datefin = new Date(request.params.Datefin);
  pool.query(
    que.getRecuFiche,
    [Livreur, Datedebut, Datefin],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const AvanceFiche = (request, response) => {
  const Livreur = request.params.Livreur;
  const Datedebut = new Date(request.params.Datedebut);
  const Datefin = new Date(request.params.Datefin);
  pool.query(
    que.AvanceFiche,
    [Livreur, Datedebut, Datefin],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const PartLivreurFiche = (request, response) => {
  const Livreur = request.params.Livreur;
  const Datedebut = new Date(request.params.Datedebut);
  const Datefin = new Date(request.params.Datefin);
  pool.query(
    que.PartLivreurFiche,
    [Livreur, Datedebut, Datefin],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
module.exports = {
  createRecu,
  getRecu,
  updateRecu,
  deleteRecu,
  getTotalRecuTod,
  getSumPartlivreur,
  getSumPartEntreprise,
  getSumCommission,
  getsUMRecuNet,
  getSumAvance,
  getRetour,
  NbrLivreur,
  RecuFiche,
  AvanceFiche,
  PartLivreurFiche,
};
