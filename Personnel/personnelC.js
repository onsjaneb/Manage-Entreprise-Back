const express = require("express");
const pool = require("../connection");
const que = require("./personnelQ");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jwt = require("jsonwebtoken");
let secretKey = "YouwillneverHackusurbancomMENUTIUMvsbdj";
const createUser = (request, response) => {
  const {
    NomUser,
    PrenomUser,
    Utilisateur,
    Login,
    Email,
    Telephone,
    DateAjout,
    Role,
  } = request.body;
  pool.query(que.checkLoginexistance, [Login], (error, results) => {
    if (results.rows.length) {
      response.json({ message: "Login already exist !" });
    } else {
      pool.query(
        que.createuser,
        [
          NomUser,
          PrenomUser,
          Utilisateur,
          Login,
          Email,
          Telephone,
          DateAjout,
          Role,
        ],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            response.status(200).json({ message: "User added successfully" });
          }
        }
      );
    }
  });
};
const getUsers = (request, response) => {
  pool.query(que.getusers, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const RemoveUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getuserbyid, [id], (error, results) => {
    const nouserfound = !results.rows.length;
    if (nouserfound) {
      response.send("No user found in database");
    }
    pool.query(que.removeuser, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("User deleted");
    });
  });
};
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    NomUser,
    PrenomUser,
    Utilisateur,
    Login,
    Email,
    Telephone,
    DateAjout,
    Role,
  } = request.body;
  pool.query(que.getuserbyid, [id], (error, results) => {
    const nouserfound = !results.rows.length;
    if (nouserfound) {
      response.json({ message: "No user found in database" });
    }
  });
  pool.query(
    que.updateuser,
    [
      NomUser,
      PrenomUser,
      Utilisateur,
      Login,
      Email,
      Telephone,
      DateAjout,
      Role,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "User updated succefully" });
    }
  );
};
const LoginAuth = (request, response) => {
  const { Utilisateur, Login } = request.body;
  pool.query(que.checkLogin, [Login], (error, results) => {
    const user = results.rows;
    if (user.length == 0) {
      response.json({ message: "Vérifier Mot de Passe !" });
    } else {
      if (
        Utilisateur == user[0].Utilisateur
      ) {
        jwt.sign(user[0], secretKey, (error, results) => {
          if (error) {
            response.json({ error: error });
          } else {
            response
              .status(200)
              .json({ Token: results, user, message: "Vous êtes connecté" });
          }
        });
      } else {
        response.json({
          message: "Vérifier Login !",
        });
      }
    }
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getuserbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
module.exports = {
  createUser,
  getUsers,
  RemoveUser,
  updateUser,
  LoginAuth,
  getUserById,
};
