function main() {
    //importHeader();
    importNavbar();
    importFooter();
    sideNavCollapse();
    M.AutoInit();

}

function importHeader() {
    $("head").load("../rhywaelle/structure/header.html");
    console.log("loaded header");
}
function importFooter() {
    $("footer").load("../rhywaelle/structure/footer.html");
    console.log("loaded footer");
}
function importNavbar() {
    $("nav").load("../rhywaelle/structure/navbar.html");
    console.log("loaded nav");
}
function sideNavCollapse() {
    $('.sidenav').sidenav();
    console.log("loaded sidenav");
}

$(document).ready(main);