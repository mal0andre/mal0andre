//NAV BAR
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    navLinks.classList
})


window.onscroll = function () { scrollNavbar() };
function scrollNavbar() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").style.padding = "10px 25px";
        document.getElementById("navbar").style.backdropFilter = "blur(3px)";
        document.getElementById("navbar").style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(255, 255, 255, 0) 100%)";
    } else {
        document.getElementById("navbar").style.padding = "50px";
        document.getElementById("navbar").style.backdropFilter = "none";
        document.getElementById("navbar").style.background = "none";
    }
}

function scrollClick() {
    let pageHeight = window.innerHeight;
    let position = pageHeight - 10 - 64;
    window.scrollTo(0, position);
}