document.write(`
<link rel="stylesheet" href="header.css">

<header>
    <nav class=" navbar navbar-expand-lg navbar-default
    fixed-top py-lg-0 ">

        <a class="navbar-brand" href="index.html">

            <!-- Add logo with size of 90*80 -->
            <img src="images/R_purplegold.png" width="90" height="90" alt="">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
        </button>
        <ul>
            <h1 class="headert1">Armor Robotics 9143</h1>
            <h2 class="headert2">Archbishop Riordan High School</h2>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="leadership.html">Leadership</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Departments</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">History</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Social Media</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Calendar</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Handbook</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Constitution</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sponsors
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Support Us</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Donate</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Volunteer</a>
                </div>
            </li>
        </ul>
    </nav>
</header>
`);