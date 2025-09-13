var WWidth = document.body.clientWidth;
var WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);

const menuIcon = document.querySelector(`.menu-icon`);
const body = document.querySelector(`body`);
const header_ul = document.getElementsByClassName('header_contact')[0];
const button = document.getElementById('head_but');

function but(){
    header_ul.classList.toggle('active');
}
function toggleMenuIcon() {
    if (menuIcon.disabled == false) window.scrollTo({ top: 0, behavior: "smooth" });
}

if (window.pageYOffset > WHeight) {
    menuIcon.disabled = false;
    menuIcon.style.cursor = "pointer";
    menuIcon.style.opacity = "100%";
}
else {
    menuIcon.disabled = true;
    menuIcon.style.cursor = "default";
    menuIcon.style.opacity = "0%";
}

body.style.width = `${WWidth}px`;

window.addEventListener('resize', () => {
    WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    WWidth = document.body.clientWidth;
    body.style.width = `${WWidth}px`;
});
window.addEventListener("scroll", function () {
    if (window.pageYOffset > WHeight) {
        menuIcon.disabled = false;
        menuIcon.style.cursor = "pointer";
        menuIcon.style.opacity = "100%";
    }
    else {
        menuIcon.disabled = true;
        menuIcon.style.cursor = "default";
        menuIcon.style.opacity = "0%";
    }
});

button.addEventListener("click", but);
menuIcon.addEventListener('click', toggleMenuIcon);


