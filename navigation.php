<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <script src="js/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="css/header&footer.css">
    <link rel="stylesheet" href="css/section.css">
    <title>Brathna.NET</title>
</head>
<body>
    <!--Navigation bar-->
    <nav>
        <ul>
            <li class="logo"><a href="">Brathna.NET</a></li>
            <div class="responsive">
                <li class="menu"><a href="">About</a></li>
                <li class="menu"><a href="">Blog</a></li>
                <li class="menu"><a href="">Web Development</a></li>
                <li class="menu"><a href="">Web Hosting</a></li>
            </div>
            <li id="menu-bar-toggle">
                <i onclick="changeClass(this)" onresize="changeClassResize(this) " class="fas fa-bars menu-toggle"></i>
            </li>
        </ul> 
    </nav>