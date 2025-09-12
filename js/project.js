var WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);

const menuIcon = document.querySelector(`.menu-icon`);

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
menuIcon.addEventListener('click', toggleMenuIcon);

window.addEventListener('resize', () => {
    WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
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


