//NAV BAR
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    navLinks.classList
})

function discord_card() {
    const element = document.querySelector('.iframe_discord');
    element.classList.add('iframe_discord_visible');
    setTimeout(discord_card_undo, 5000);
}

function discord_card_undo() {
    const element = document.querySelector('.iframe_discord');
    element.classList.remove('iframe_discord_visible');
}