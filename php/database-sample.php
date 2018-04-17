<?php

$connection = null;

function getConnection(&$connection) {

    if ($connection !== null) {
        return $connection;
    }

    $dbhost = "localhost";
    $dbname = "technobel";
    $dbuser = "user";
    $dbpass = "pass1234";

    $connection = new PDO(
        "mysql:host=$dbhost;dbname=$dbname;charset=utf8", // connectionString
        $dbuser,
        $dbpass
    );

    // Ces 2 lignes modifient 2 options de PDO, voir la doc
    // :: fait référence à une constante de la classe PDO
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $connection;
}
