var WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
var WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);

const Icon = document.querySelector(`.to-up`);
const body = document.querySelector(`body`);
const header_ul = document.getElementsByClassName('header_contact')[0];
const button = document.getElementById('head_but');

function but(){
    header_ul.classList.toggle('active');
}
function toggleMenuIcon() {
    if (Icon.disabled == false) window.scrollTo({ top: 0, behavior: "smooth" });
}

if (window.pageYOffset > WHeight) {
    Icon.disabled = false;
    Icon.style.cursor = "pointer";
    Icon.style.opacity = "100%";
}
else {
    Icon.disabled = true;
    Icon.style.cursor = "default";
    Icon.style.opacity = "0%";
}

body.style.width = `${WWidth}px`;

window.addEventListener('resize', () => {
    WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    body.style.width = `${WWidth}px`;
});
window.addEventListener("scroll", function () {
    if (window.pageYOffset > WHeight) {
        Icon.disabled = false;
        Icon.style.cursor = "pointer";
        Icon.style.opacity = "100%";
    }
    else {
        Icon.disabled = true;
        Icon.style.cursor = "default";
        Icon.style.opacity = "0%";
    }
});

button.addEventListener("click", but);
menuIcon.addEventListener('click', toggleMenuIcon);


