const AddDepense =
  'INSERT INTO public."Depenses" ("Montant", "Motif", "Date") VALUES ($1, $2, $3)';
module.exports = {
  AddDepense,
};
