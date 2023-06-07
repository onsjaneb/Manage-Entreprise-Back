const express = require("express");
const router = express.Router();
const cors = require("cors");
const clientsC = require("./Clients/ClientsC");
const livreurC = require("./Livreur/LivreurC");
const UserC = require("./Personnel/personnelC");
router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("preflightContinue", false);
  res.setHeader("optionsSuccessStatus", 204);
  next();
});
//Client
router.get("/Clients", cors(), clientsC.getClients);
router.post("/AddClient", cors(), clientsC.createClient);
router.put("/Updateclient/:id", cors(), clientsC.updateClient);
router.get("/client/:id", cors(), clientsC.getClientById);
router.delete("/Deleteclient/:id", cors(), clientsC.deleteClient);
//Livreur
router.get("/Livreurs", cors(), livreurC.getLivreur);
router.post("/AddLivreur", cors(), livreurC.createLivreur);
router.put("/Updatelivreur/:id", cors(), livreurC.updateLivreur);
router.get("/livreur/:id", cors(), livreurC.getLivreurById);
router.delete("/Deletelivreur/:id", cors(), livreurC.deleteLivreur);
//Users
router.get("/users", cors(), UserC.getUsers);
router.get("/user/:id", cors(), UserC.getUserById);
router.post("/createusers", cors(), UserC.createUser);
router.post("/LoginAuth", cors(), UserC.LoginAuth);
router.delete("/Deleteuser/:id", cors(), UserC.RemoveUser);
router.put("/Updateuser/:id", cors(), UserC.updateUser);
module.exports = router;
