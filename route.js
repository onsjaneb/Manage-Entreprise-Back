const express = require("express");
const router = express.Router();
const cors = require("cors");
const clientsC = require("./Clients/ClientsC");
const livreurC = require("./Livreur/LivreurC");
const UserC = require("./Personnel/personnelC");
const RecuC = require("./Recu/RecuC");
const CaisseC = require("./Caisse Principale/CaissepC");
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
router.get("/ClientFidele", cors(), clientsC.getClientFidele);
router.get("/ClientMoyen", cors(), clientsC.getClientMoyen);
router.get("/ClientNouveau", cors(), clientsC.getClientNouveau);
router.get("/ClientGentil", cors(), clientsC.getClientGentil);
router.get("/ClientMechant", cors(), clientsC.getClientMechant);
router.get("/ClientNormal", cors(), clientsC.getClientNormal);
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
//Recu
router.get("/Recus", cors(), RecuC.getRecu);
router.get("/TotalRecuTod", cors(), RecuC.getTotalRecuTod);
router.get("/SumPartLivreur", cors(), RecuC.getSumPartlivreur);
router.get("/SumPartEntreprise", cors(), RecuC.getSumPartEntreprise);
router.get("/SumCommission", cors(), RecuC.getSumCommission);
router.get("/SumRecuNet", cors(), RecuC.getsUMRecuNet);
router.get("/SumAvance", cors(), RecuC.getSumAvance);
router.get("/SumRetour", cors(), RecuC.getRetour);
router.get("/SumLivreur", cors(), RecuC.NbrLivreur);
router.post("/AddRecu", cors(), RecuC.createRecu);
router.put("/UpdateRecu/:id", cors(), RecuC.updateRecu);
router.delete("/DeleteRecu/:id", cors(), RecuC.deleteRecu);
router.get("/RecuFiche/:Livreur/:Datedebut/:Datefin", cors(), RecuC.RecuFiche);
//Caisse
router.post("/CreateCaisse", cors(), CaisseC.createCaisse);
router.get("/Caisses", cors(), CaisseC.getCaisse);
router.get("/StatsC", cors(), CaisseC.getStat);
router.get("/StatsC1", cors(), CaisseC.getStat1);
router.get("/StatsC2", cors(), CaisseC.getStat2);
router.get("/StatsC3", cors(), CaisseC.getStat3);
router.get("/StatsC4", cors(), CaisseC.getStat4);
router.get("/StatsC5", cors(), CaisseC.getStat5);
router.get("/StatsC6", cors(), CaisseC.getStat6);
//TempsValidation
router.post("/CreateValidation", cors(), CaisseC.createTempsV);
router.get("/Validation", cors(), CaisseC.getValidation);
module.exports = router;
