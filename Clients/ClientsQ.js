const getClients = 'SELECT * FROM public."Clients" ORDER BY id ASC ';
const AddClient = 'INSERT INTO public."Clients" ("NomComplet","AdressePostale","NomAgentTel","Telephone","Sexe","caractere","NombreCommande","NombreRetour","TypeClient","Appele","DateNaissance","DateAppel","Proffession","Email","Commentaire") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)';
const checkTelexistance = 'SELECT c FROM public."Clients" c WHERE c."Telephone"=$1';
const updateclient = 'UPDATE public."Clients" SET "NomComplet" = $1, "AdressePostale" = $2,"NomAgentTel" = $3,"Telephone" = $4,"Sexe" = $5,"caractere" = $6,"NombreCommande" = $7,"NombreRetour" = $8,"TypeClient" = $9,"Appele" = $10,"DateNaissance" = $11,"DateAppel" = $12,"Proffession" = $13,"Email" = $14,"Commentaire" = $15 WHERE id=$16';
const getclientbyid = 'SELECT * FROM public."Clients" WHERE id = $1';
const removeclient = 'DELETE FROM public."Clients" WHERE id = $1';
module.exports = {
    getClients,
    AddClient,
    updateclient, 
    getclientbyid,
    checkTelexistance,
    removeclient
  };
  