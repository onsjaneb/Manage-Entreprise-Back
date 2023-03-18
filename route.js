const express = require("express");
const router = express.Router();
const cors = require("cors");
const clientsC = require("./Clients/ClientsC");
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
  //User
  router.get("/Clients", cors(),clientsC.getClients);
  router.post("/AddClient", cors(),clientsC.createClient);
  router.post("/AuthClient", cors(),clientsC.LoginAuth);
  router.put("/Updateclient/:id", cors(), clientsC.updateClient);
  router.get("/client/:id", cors(),clientsC.getClientById);
  

 

  module.exports = router;