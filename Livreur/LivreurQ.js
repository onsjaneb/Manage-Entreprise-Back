const getLivreurs = 'SELECT * FROM public."Livreurs" ORDER BY id ASC ';
const AddLivreur =
  'INSERT INTO public."Livreurs" ("NomComplet","Telephone","AdressePostale","Type","Pourcentage", "DateAjout") VALUES ($1, $2, $3, $4, $5, $6)';
const UpdateLivreur =
  'UPDATE public."Livreurs" SET "NomComplet" = $1, "Telephone" = $2, "AdressePostale" = $3, "Type" = $4, "Pourcentage" = $5, "DateAjout" = $6 WHERE id = $7';
const getlivreurbyid = 'SELECT * FROM public."Livreurs" WHERE id = $1';
const removelivreur = 'DELETE FROM public."Livreurs" WHERE id = $1';
module.exports = {
  getLivreurs,
  AddLivreur,
  UpdateLivreur,
  getlivreurbyid,
  removelivreur,
};
