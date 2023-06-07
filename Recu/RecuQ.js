const AddRecu =
  'INSERT INTO public."Recu" ("Livreur","Totalrecu","Commission","PLivreur","PEntreprise","Partlivreur","PartEntreprise","RecuNet") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
module.exports = {
  AddRecu,
};
