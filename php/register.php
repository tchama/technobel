<?php

include('session.php');
include('database.php');
include('functions.php');

if (!empty($_POST)) {

    if (validateRequiredField('username')
        && validateRequiredField('firstname')
        && validateRequiredField('lastname')
        && validateRequiredField('password')) {

        $username = $_POST['username'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];

        $salt = generateSalt();
        hashPassword($_POST['password'], $salt);
        $password = $_POST['password'];

        $sql = "INSERT INTO users (username, password, salt, firstname, lastname)
        VALUES (:username, :password, :salt, :firstname, :lastname)";

        $co = getConnection($connection);
        $request = $co->prepare($sql);
        $retour = $request->execute(array(
            ':username' => $username,
            ':password' => $password,
            ':salt' => $salt,
            ':firstname' => $firstname,
            ':lastname' => $lastname,
        ));

        if ($retour) {
            $codeRetour = array("success", "Votre compte a bien été créé !");

            $_SESSION['id'] = $co->lastInsertId();

            header('Location: profil.php');
            exit(0);

        } else {
            $codeRetour = array("error", "Aïe, quelquechose s'est mal passé !");

            // TODO gérer ce qu'il se passe alors
            // pour l'instant rien ne s'affiche si par exemple
            // on crée un user qui existe déjà
        }

    }
    else {
        $codeRetour = array("error", "Certains champs sont invalides !");
    }
}
?>

<?php
include('head.php');
include('header.php');
include('sidebar.php');
?>

<section id="register">
    <form class="register sign" action="" method="post" name="register">
        <h3>S'enregistrer</h3>
        <?php displayFormMessage($codeRetour) ?>

        <fieldset>
            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" required autofocus >
        </fieldset>
        <fieldset>
            <label for="lastname">Nom</label>
            <input type="text" name="lastname" required >
        </fieldset>
        <fieldset>
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" required >
        </fieldset>
        <fieldset>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" required>
        </fieldset>
        <input type="submit" value="Créer un compte">

    </form>
</section>

<?php
include('footer.php');
?>
