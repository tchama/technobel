<?php
// LOGIC
include('session.php');
include('database.php');
include('functions.php');

if (!empty($_POST)) {

    if (validateRequiredField('username')
        && validateRequiredField('password')) {

        $username = $_POST['username'];

        $co = getConnection($connection);
        $query = $co->prepare("SELECT * FROM users WHERE username LIKE :username");
        $query->execute(array(
            ":username" => $username
        ));
        $result = $query->fetch();

        // S'il y a un résultat
        if ($result !== false ) {

            $salt = $result['salt'];
            hashPassword($_POST['password'], $salt);
            $password = $result['password'];

            if (strcmp($_POST['password'], $password) === 0 ) {

                $_SESSION['id'] = $result['id'];

                // redirection et sortie
                header('Location: profil.php');
                exit(0);
            }
            else {
                $codeRetour = array("error", "La connexion a échoué !");
            }

        }
        else {
            $codeRetour = array("error", "Utilisateur inconnu !");
        }
    }
}
?>


<?php
include('head.php');
include('header.php');
include('sidebar.php');
?>

<section id="login">
    <form class="login sign" action="" method="post">
        <h3>Se connecter</h3>
        <?php displayFormMessage($codeRetour) ?>

        <fieldset>
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" required autofocus autocomplete
                <?php displayValue('username') ?> >
        </fieldset>
        <fieldset>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" required>
        </fieldset>
        <input type="submit" value="Se connecter">

    </form>
</section>

<?php
include('footer.php');
?>
