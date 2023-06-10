const AddRecu =
  'INSERT INTO public."Recu" ("Livreur","Totalrecu","Commission","PLivreur","PEntreprise","Partlivreur","PartEntreprise","RecuNet","DateAjout", "Avance", "Retour", "Statut") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
const getRechTod =
  'SELECT * FROM public."Recu" WHERE "DateAjout" = DATEADD(day, -1, GETDATE()) ORDER BY id DESC';
const updaterecu =
  'UPDATE public."Recu" SET "Livreur" = $1, "Totalrecu" = $2, "Commission" = $3, "PLivreur" = $4, "PEntreprise" = $5, "Partlivreur" = $6, "PartEntreprise" = $7, "RecuNet" = $8, "DateAjout" = $9,  "Avance" = $10, "Retour" = $11, "Statut" = $12  WHERE id = $13';
const removeRecu = 'DELETE FROM public."Recu" WHERE id = $1';
const sumTotalRecu =
  'SELECT SUM("Totalrecu") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumPartLivreur =
  'SELECT SUM("PLivreur") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumPartEntreprise =
  'SELECT SUM("PEntreprise") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumCommission =
  'SELECT SUM("Commission") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumRecuNet =
  'SELECT SUM("RecuNet") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumAvance =
  'SELECT SUM("Avance") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumRetour =
  'SELECT SUM("Retour") FROM public."Recu" WHERE date("DateAjout") = date(now())';
const sumLivreur =
  'SELECT COUNT(*) FROM public."Recu" WHERE date("DateAjout") = date(now())';
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
};
