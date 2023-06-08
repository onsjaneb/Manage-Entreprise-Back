const AddCaisse =
  'INSERT INTO public."CaissePrincipale" ("NBRLivreur", "Totalrecu", "Commission", "Partlivreur", "PartEntreprise", "RecuNet", "DateAjout", "Avance", "Retour") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const getCaisseMonth =
  'SELECT * FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "Date") =  EXTRACT(MONTH FROM now()) ORDER BY id DESC';
module.exports = {
  AddCaisse,
  getCaisseMonth,
};
