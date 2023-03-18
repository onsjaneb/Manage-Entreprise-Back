const getClients = 'SELECT * FROM public."Clients" ORDER BY id ASC ';
const AddClient = 'INSERT INTO public."Clients" ("NomComplet","AdressePostale","NomAgentTel","Telephone","Sexe","caractere","NombreCommande","NombreRetour","TypeClient","Appele","DateNaissance","DateAppel","Proffession","Email","Commentaire") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)';
const checkTelexistance = 'SELECT c FROM public."Clients" c WHERE c."Telephone"=$1';
const updateclient = 'UPDATE public."Clients" SET "NomComplet" = $1, "UserName" = $2, "Genre" = $3, "Email" = $4, "Telephone" = $5, "Password" = $6, "Ville" = $7, "Adresse" = $8, "DateNaissance" = $9 WHERE id=$10';
const getclientbyid = 'SELECT * FROM public."Clients" WHERE id = $1';
module.exports = {
    getClients,
    AddClient,
    checkTelexistance,
    updateclient, 
    getclientbyid
  };
  