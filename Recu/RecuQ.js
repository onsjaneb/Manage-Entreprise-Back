const AddRecu =
  'INSERT INTO public."Recu" ("Livreur","Totalrecu","Commission","PLivreur","PEntreprise","Partlivreur","PartEntreprise","RecuNet","DateAjout", "Avance", "Retour", "Statut", "Fraislivraison", "DateCompta") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';
const getRechTod =
  'SELECT * FROM public."Recu" WHERE date("DateAjout") = "2023-06-03" ORDER BY id DESC';
const updaterecu =
  'UPDATE public."Recu" SET "Livreur" = $1, "Totalrecu" = $2, "Commission" = $3, "PLivreur" = $4, "PEntreprise" = $5, "Partlivreur" = $6, "PartEntreprise" = $7, "RecuNet" = $8, "DateAjout" = $9,  "Avance" = $10, "Retour" = $11, "Statut" = $12, "Fraislivraison" = $13, "DateCompta" = $14  WHERE id = $15';
const removeRecu = 'DELETE FROM public."Recu" WHERE id = $1';
const sumTotalRecu =
  'SELECT SUM("Totalrecu") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03" ';
const sumPartLivreur =
  'SELECT SUM("Partlivreur") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumPartEntreprise =
  'SELECT SUM("PartEntreprise") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumCommission =
  'SELECT SUM("Commission") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumRecuNet =
  'SELECT SUM("RecuNet") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumAvance =
  'SELECT SUM("Avance") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumRetour =
  'SELECT SUM("Retour") FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const sumLivreur =
  'SELECT COUNT(*) FROM public."Recu" WHERE date("DateAjout") = "2023-06-03"';
const getRecuFiche =
  'SELECT * FROM public."Recu" WHERE "Livreur" = $1 And "DateCompta" BETWEEN $2 AND $3';
const AvanceFiche =
  'SELECT SUM("Avance") FROM public."Recu" WHERE "Livreur" = $1 And "DateCompta" BETWEEN $2 AND $3';
const PartLivreurFiche =
  'SELECT SUM("Partlivreur") FROM public."Recu" WHERE "Livreur" = $1 And "DateCompta" BETWEEN $2 AND $3';
module.exports = {
  AddRecu,
  getRechTod,
  updaterecu,
  removeRecu,
  sumTotalRecu,
  sumPartLivreur,
  sumPartEntreprise,
  sumCommission,
  sumRecuNet,
  sumAvance,
  sumRetour,
  sumLivreur,
  getRecuFiche,
  AvanceFiche,
  PartLivreurFiche,
};
