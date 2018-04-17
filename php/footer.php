                <br class="clearfix" />
            </div>
        </div>
        <div id="footer">
            <div class="container">

                Site réalisé en <a href="http://php.net/manual/fr">PHP</a> ::
                Réalisation <a href="http://mathieu.collectifs.net">Tchama</a> 2018

            </div>
        </div>
        <div id="debug">
            <?php
                var_dump($_GET);
                var_dump($_POST);
                var_dump($_SESSION);
                //var_dump($_SERVER);
                //var_dump($connection);
            ?>
        </div>
        <button type="button" name="button" id="dtoggle">Debug</button>
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
