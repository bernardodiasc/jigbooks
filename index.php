<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"/>
    <title>Jigsaw Puzzle Books · Avante Estúdio</title>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'/>
    <link rel="stylesheet" href="css/main.css"/>
</head>
<body>
    <section id="boot" class="state"></section>
    <section id="preload" class="state">
        <span class="loading"><em class="js-loading"></em></span>
    </section>
    <section id="mainmenu" class="state">
        <img class="cover js-cover" src="img/cover-book01.png" alt="Livro das Memórias"/>
        <h1 class="js-maintitle">Jigsaw Puzzle Books</h1>
        <ul class="mainmenu js-mainmenu">
            <li class="button js-goto-play">Play</li>
            <li class="button js-goto-books">Books</li>
            <li class="button js-goto-options">Options</li>
            <li class="button js-goto-achievements">Achievements</li>
            <li class="button js-goto-credits">Credits</li>
        </ul>
    </section>
    <section id="play" class="state">
        <h1>Play</h1>
        <a class="goto-mainmenu button js-goto-mainmenu">main menu</a>
    </section>
    <section id="books" class="state">
        <h1>Books</h1>
        <a class="goto-mainmenu button js-goto-mainmenu">main menu</a>
    </section>
    <section id="options" class="state">
        <h1>Options</h1>
        <a class="goto-mainmenu button js-goto-mainmenu">main menu</a>
    </section>
    <section id="achievements" class="state">
        <h1>Achievements</h1>
        <a class="goto-mainmenu button js-goto-mainmenu">main menu</a>
    </section>
    <section id="credits" class="state">
        <h1>Credits</h1>
        <a class="goto-mainmenu button js-goto-mainmenu">main menu</a>
    </section>

    <script src="js/jquery-2.1.0.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>