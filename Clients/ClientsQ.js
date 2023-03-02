const getClients = 'SELECT * FROM public."Clients" ORDER BY id ASC ';
const AddClient = 'INSERT INTO public."Clients" ("NomComplet", "UserName", "Genre", "Email", "Telephone", "Password", "Ville", "Adresse") VALUES ($1, $2, $3, $4, $5, $6, $7)';
const checkEmailexistance = 'SELECT c FROM public."Clients" c WHERE c."Email"=$1';
const checkUserNameexistance = 'SELECT c FROM public."Clients" c WHERE c."UserName"=$1';
module.exports = {
    getClients,
    AddClient,
    checkEmailexistance,
    checkUserNameexistance
  };
  