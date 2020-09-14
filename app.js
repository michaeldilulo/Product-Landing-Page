function navbarResponsive() {
    var fullNavbar = document.getElementById("productNavbarLinks")
    if (fullNavbar.style.display === "block") {
        fullNavbar.style.display = "none"
    } else {
        fullNavbar.style.display = "block";
    }
}