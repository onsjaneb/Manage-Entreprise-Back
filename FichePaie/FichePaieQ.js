const AddFichePaie =
  'INSERT INTO public."FichePaie" ("livreur","datefiche", "livraison", "retour", "abonnementorange", "cautionsac", "livraisongratuite", "montantbrut", "montantnet") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
module.exports = {
  AddFichePaie,
};
