let nav = `
<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <a id="cont" class="text-body-secondary text-decoration-none lh-1 rounded-circle" href="/Homepage/index.html"><img class="h-8 w-auto" id="logo" src="/Assets/bynd.png" alt="Logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/Homepage/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Gallery/index.html">Gallery</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Learn</a></li>
              <li><a class="dropdown-item" href="#">Create</a></li>
              <li><a class="dropdown-item" href="#">Community</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">About</a></li>
              <li><a class="dropdown-item" href="#">FAQs</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/Contact/card.html">Contact us</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button id="search" class="btn btn-outline-primary" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>`
document.getElementById("header").innerHTML= nav;
