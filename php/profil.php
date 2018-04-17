<?php
include('session.php');
include('database.php');
include('functions.php');

if (isset($_SESSION['id'])) {

    $co = getConnection($connection);
    $query = $co->prepare("SELECT * FROM users WHERE id = :id");
    $query->execute(array(
        ":id" => $_SESSION['id']
    ));
    $session = $query->fetch();

}

if (!empty($_POST)) {

    if (validateRequiredField('username')
        && validateRequiredField('firstname')
        && validateRequiredField('lastname')) {

            $sql = "UPDATE users
                    SET username = :username,
                        firstname = :firstname,
                        lastname = :lastname
                    WHERE id = :id";

            $co = getConnection($connection);
            $query = $co->prepare($sql);
            $query->execute(array(
                ":id" => $_SESSION['id'],
                ":username" => $_POST['username'],
                ":firstname" => $_POST['firstname'],
                ":lastname" => $_POST['lastname']
            ));

        $codeRetour = array("success", "Votre profil a bien été modifié !");
    }
    else {
        $codeRetour = array("error", "Certains champs sont invalides !");
    }

    if (validateRequiredField('password')
        && validateRequiredField('passconfirm')) {

        if ($_POST['password'] === $_POST['passconfirm']) {

            $salt = generateSalt();
            hashPassword($_POST['password'], $salt);
            $password = $_POST['password'];
            $_POST['passconfirm'] = NULL;

            $co = getConnection($connection);
            $sql = "UPDATE users
                    SET password = :password,
                        salt = :salt
                    WHERE id = :id";

            $request = $co->prepare($sql);
            if ($request->execute(array(
                ":id" => $_SESSION['id'],
                ":password" => $password,
                ":salt" => $salt

            ))) {
                $codeRetour = array("success", "Votre mot de passe a bien été modifié !");
            }
            else {
                $codeRetour = array("error", "Aïe, un souci empêche la mise à jour du mot de passe !");
            }
        }
        else {
            $codeRetour = array("error", "Désolé, les saisies de votre mot de passe ne correspondent pas.");
        }
    }
}

?>

<?php
// VISUEL
include('head.php');
include('header.php');
include('sidebar.php');
?>

<section id="profil">
    <h1>
        MON PROFIL
    </h1>

    <form class="profil sign" action="" method="post">
        <h3>Modifier mon profil</h3>
        <?php displayFormMessage($codeRetour) ?>

        <fieldset>
            <label for="id">#</label>
            <input type="text" name="id" disabled <?php displayValue('id', $session); ?> >
        </fieldset>
        <fieldset>
            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" <?php displayValue('firstname', $session); ?> >
        </fieldset>
        <fieldset>
            <label for="lastname">Nom</label>
            <input type="text" name="lastname" <?php displayValue('lastname', $session); ?> >
        </fieldset>
        <fieldset>
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" <?php displayValue('username', $session); ?> >
        </fieldset>
        <fieldset>
            <label for="password">Mot de passe</label>
            <input type="password" name="password">
        </fieldset>
        <fieldset>
            <label for="passconfirm">Confirmation</label>
            <input type="password" name="passconfirm">
        </fieldset>
        <input type="submit" value="Enregistrer">
    </form>

    <form class="delete sign" action="delete.php" method="post">
        <h3>Supprimer mon compte</h3>
        <p>Une fois validée, cette opération sera irréversible.</p>
        <input type="submit" value="Supprimer">
    </form>

</section>

<?php
include('footer.php');
?>
