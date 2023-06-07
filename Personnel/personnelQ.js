const createuser =
  'INSERT INTO public."Users" ("NomUser", "PrenomUser", "Utilisateur", "Login", "Email", "Telephone", "DateAjout", "Role") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
const getusers = 'SELECT * FROM public."Users" ORDER BY id ASC';
const getuserbyid = 'SELECT * FROM public."Users" WHERE id = $1';
const updateuser =
  'UPDATE public."Users" SET "NomUser" = $1, "PrenomUser" = $2, "Utilisateur" = $3, "Login" = $4, "Email" = $5, "Telephone" = $6, "DateAjout" = $7, "Role" = $8 WHERE id = $9';
const removeuser = 'DELETE FROM public."Users" WHERE id = $1';
const checkLoginexistance = 'SELECT u FROM public."Users" u WHERE u."Login"=$1';
const checkLogin = 'SELECT * FROM public."Users" WHERE "Login"=$1';
module.exports = {
  createuser,
  getusers,
  getuserbyid,
  updateuser,
  removeuser,
  checkLoginexistance,
  checkLogin,
};
