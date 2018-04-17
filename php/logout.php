<?php

include 'session.php';

// détruire le tableau session puis rediriger
session_unset();
session_destroy();

header('Location: index.php');
exit(0);

?>
