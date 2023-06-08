const AddCaisse =
  'INSERT INTO public."CaissePrincipale" ("NBRLivreur", "Totalrecu", "Commission", "Partlivreur", "PartEntreprise", "RecuNet", "DateAjout", "Avance", "Retour") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const getCaisseMonth =
  'SELECT * FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") =  EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now()) ORDER BY id DESC';
const AddTempsV =
  'INSERT INTO public."TempsValidation" ("DateAjout", "Validation") VALUES ($1, $2)';
const getTempsV =
  'SELECT * FROM public."TempsValidation" WHERE date("DateAjout") = date(now()) ORDER BY id DESC';
const stat =
  'SELECT SUM("Totalrecu") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat1 =
  'SELECT SUM("Partlivreur") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat2 =
  'SELECT SUM("PartEntreprise") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat3 =
  'SELECT SUM("Commission") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat4 =
  'SELECT SUM("RecuNet") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat5 =
  'SELECT SUM("Avance") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
const stat6 =
  'SELECT SUM("Retour") FROM public."CaissePrincipale" WHERE EXTRACT(MONTH FROM "DateAjout") = EXTRACT(MONTH FROM now()) And EXTRACT(YEAR FROM "DateAjout") = EXTRACT(YEAR FROM now())';
module.exports = {
  AddCaisse,
  getCaisseMonth,
  AddTempsV,
  getTempsV,
  stat,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
};
