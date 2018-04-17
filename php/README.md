getConnection()
hashPassword()
getSalt()
exec
query

$co = getConnection();
$co->exec('INSERT/UPDATE/DELETE');
$co->query('SELECT')
	=> fetch
	=> fetchAll()
	=> foreach

$username dans un string => "$username";

Petit exercice:
1) Pour toutes les pages, récupérer le user s'il est connecté (var_dump);
2) Quand un utilisateur se connecte, mettre l'IP du user dans la DB($_SERVER['REMOTE_ADDR']);
3) Auto co utilisateur après création de compte

4) Créer un site avec un CRUD complet de user
BONUS : Gérer les droits



email: julien.coppin@bstorm.be
