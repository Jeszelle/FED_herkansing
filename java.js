console.log("SM GLOBAL WEB SHOP")

function toggleMenu() {
    const menu = document.querySelector('.off-screen');
    menu.classList.toggle('open');

    document.querySelector('.menu-toggle').classList.toggle('hidden');
    document.querySelector('.menu-close').classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-close').classList.add('hidden');
});


// https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/

var scrollToTop = document.querySelector(".scrollToTop");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = 
rootElement.scrollHeight - 
rootElement.clientHeight; 
    if (rootElement.scrollTop / scrollTotal > 0.8) {
        scrollToTop.classList.add("showBtn");
    }   else {
        scrollToTop.classList.remove("showBtn");
    }
}

function scrollToTopB() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTop.addEventListener("click", scrollToTopB);
document.addEventListener("scroll", handleScroll);

