<?php

/*
 *  displayValue
 *  chaque input va pouvoir afficher la valeur récupérée
 */

function displayValue($name, $session)
{
    if (isset($_POST[$name])) {
        echo "value=\"" . $_POST[$name] . "\"";
    } else {
        echo "value=\"" . $session[$name] . "\"";
    }
}

/*
 *  displayFormMessage
 *  Affichage des messages de retour pour les formulaires
 */
function displayFormMessage($message)
{
    echo "<div class=\"" . $message[0] . "\">" . $message[1] . "</div>";
}

/*
 *  validateRequiredField
 *
 *  vérifie la validité d'un champs
 *  - le champs est-il dans le tableau $_POST ?
 *  - le champs a t-il été complété ?
 *  trim les espaces et retourne vrai ou faux (bool)
 */
function validateRequiredField($name)
{
    $isValid = isset($_POST[$name]) && trim($_POST[$name]) != '';
    return $isValid;
}

/*
 *  hashPassword
 *
 *  on veut être sûr que le mdp s'il n'est pas hashé, alors il est vide !
 *  noter dans la condition la valeur de retour 1 (linux stdout)
 *
 *  la fonction ne se termine pas par un return mais avec $password = ...
 *  elle ne retourne rien, mais elle a bien modifié $password
 *  car $password est passé par référence (&)
 */
function hashPassword(&$password, $salt) {
    if (strlen($salt) !== 22) {
        $password = null;
        exit(1);
    }
    $options = array(
        'salt' => $salt
    );
    $password = password_hash($password, PASSWORD_BCRYPT, $options);
}

/*
 *  generateSalt
 *
 *  générer un hash de 22 caractères à l'aide de fonctions php
 *  finalement j'utilise uniqid qui retourne 23 caractères,
 *  et j'enlève ce qui dépasse (car PHP 5.x).
 *
 *  // return bin2hex(random_bytes(11)); // PHP 7.0
 *  // return mcrypt_create_iv(22); // PHP 5.* mais le salt est pourri
 */
function generateSalt() {
    return substr(uniqid("", true), 0, -1);
}

/*
 *  getUserFullname
 *  renvoie un tableau associatif nom, prénom
 */
function getUserFullname($id) {
    $co = getConnection($connection);
    $query = $co->prepare("SELECT firstname, lastname FROM users WHERE id = :id ");
    $query->execute(array(":id" => $id));
    $result = $query->fetch();
    return $result;
}

/*
 *   isAllowedToRead
 *
 *   L'utilisateur est-il autorisé à accéder à cette page ?
 *   retourne vrai ou faux (bool)
 */
function isAllowedToRead($id) {
    $co = getConnection($connection);
    $query = $co->prepare("SELECT id FROM users");
    $query->execute();
    $usersId = $query->fetchAll(PDO::FETCH_COLUMN);
    foreach($usersId as $uid) {
        if ($uid == $id) {
            return true;
        }
    }
    return false;
}


?>
