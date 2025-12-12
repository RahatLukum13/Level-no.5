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

if (window.pageYOffset > window.screen.availHeight) {
    Icon.disabled = false;
    Icon.style.cursor = "pointer";
    Icon.style.opacity = "100%";
}
else {
    Icon.disabled = true;
    Icon.style.cursor = "default";
    Icon.style.opacity = "0%";
}
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
Icon.addEventListener('click', toggleMenuIcon);


