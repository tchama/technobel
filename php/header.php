    <body>
        <div id="header">
            <div class="container">

                <h1>Tchama users</h1>
                <h3>Slogan du site</h3>

                <div id="mainnav" class="nav">
                    <ul>
                        <li class="left"><a href="index.php">Accueil</a></li>
                    <?php if (isset($_SESSION['id'])) {  ?>
                        <li class="right"><a href="profil.php">Profil</a></li>
                        <li class="right"><a href="users.php">Utilisateurs</a></li>
                        <li class="right"><a href="logout.php">Logout</a></li>
                    <?php } else { ?>
                        <li class="right"><a href="register.php">Register</a></li>
                        <li class="right"><a href="login.php">Login</a></li>
                    <?php } ?>
                    <?php if (isset($_SESSION['id'])) {
                        $fullname = implode(" ", getUserFullname($_SESSION['id']));
                        echo '<li class="user">Bienvenue <b>' . $fullname . '</b> </li>';
                    } ?>
                    </ul>
                </div>

            </div>
        </div>
        <div id="content">
            <div class="container">
