<?php
include('session.php');
include('database.php');
include('functions.php');

if (!empty($_POST) && validateRequiredField('id')) {

    $co = getConnection($connection);
    $query = $co->prepare("DELETE FROM users WHERE id = :id");
    if ($query->execute(array(
        ":id" => $_POST['id']
    ))) {

        $codeRetour = array("success", "Votre compte a bien été supprimé !");
        header('Location: logout.php');
        exit(0);

    } else {
        $codeRetour = array("error", "Il y a eu un souci, le compte n'a pas été supprimé ! <br>
        Contactez un administrateur du site pour résoudre le problème.");
    };
}
?>

<?php
include('head.php');
include('header.php');
include('sidebar.php');
?>

<section id="delete">
    <h1>
        MON PROFIL
    </h1>
    <p><a href="profil.php">← Retour</a></p>

    <form class="sign" action="" method="post">
        <fieldset>
            <h3>Suppression définitive du compte</h3>
            <?php displayFormMessage($codeRetour) ?>

            <p>
                Êtes-vous sûr de bien vouloir supprimer votre compte ?
                Attention, cette action est irréversible.
            </p>
        </fieldset>

        <input type="hidden" name="id" <?php displayValue('id', $_SESSION); ?> >
        <input type="submit" value="Oui, supprimer">
    </form>
</section>

<?php
include('footer.php');
?>
