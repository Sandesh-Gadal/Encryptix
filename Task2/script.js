function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

