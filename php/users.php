<?php
include('session.php');
include('database.php');
include('functions.php');

if (isset($_SESSION['id'])) {

    if (isAllowedToRead($_SESSION['id'])) {

        $co = getConnection($connection);
        $query = $co->prepare("SELECT id, firstname, lastname, username FROM users");
        $query->execute();
        $result = $query->fetchAll();
    }
    else {
        header('Location: index.php');
        init(0);
    }
}
?>

<?php
include('head.php');
include('header.php');
?>

    <div id="users">
        <h1>
            Liste des utilisateurs
        </h1>
        <?php

            if (isset($_SESSION['id'])) {

                $table  = "<table class=\"altern\"><thead><tr><td>#ID";
                $table .= "</td><td>Firstname";
                $table .= "</td><td>Lastname";
                $table .= "</td><td>Username";
                $table .= "</td></tr></thead><tbody>";

                for ($i=0; $i < count($result) ; $i++) {

                    (($i % 2) == 0) ? $tr = 'odd' : $tr = 'even';
                    $table .= "<tr class=\"$tr\">";
                    foreach ($result[$i] as $value) {
                        $table .= "<td>" . $value . "</td>";
                    }
                    $table .= "</tr>";
                }

                $table .= "</tbody></table>";
                echo $table;

            } else {
                echo "<p>Désolé, il faut être authentifié pour accéder à cette page.</p>";
            }

        ?>

    </div>

<?php
include('footer.php');
?>
