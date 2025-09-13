var ratio = window.screen.availWidth / window.screen.availHeight;
var WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
var WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
ratio = WWidth / WHeight;
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const background1 = document.getElementsByClassName("background")[0];
const background2 = document.getElementById("background_2");
const back_sofa = document.getElementById("back_sofa");
const secondUl = document.getElementById("slide_ul");
const menuIcon3 = document.getElementsByClassName(`menu-icon`)[0];
const menuIcon4 = document.getElementsByClassName(`menu-icon`)[1];
function toggleMenuIcon3() {
    slide3.classList.toggle('active');
}
function toggleMenuIcon4() {
    slide4.classList.toggle('active');
}
slide1.style.height = `${WHeight}px`;
slide2.style.height = `${Math.max(WHeight, WWidth / 3840 * 1914)}px`;
slide3.style.width = `${Math.max(WHeight * 3840 / 1914, WWidth)}px`
slide3.style.height = `${Math.max(WHeight * 3840 / 1914, WWidth) / (2400 + 5000 / 3121 * 3000) * 3000}px`;
slide4.style.width = `${Math.max(WHeight * 3840 / 1914, WWidth)}px`
slide4.style.height = `${Math.max(WHeight * 3840 / 1914, WWidth) / 3840 * 1670}px`;
background1.style.height = `${Math.max(WHeight, WWidth)}px`;
background2.style.height = `${Math.max(WHeight, WWidth / 3840 * 1914)}px`;
back_sofa.style.width = `${WWidth}px`;
back_sofa.style.bottom = `0px`
secondUl.style.marginTop = `${WHeight * 0.06 + pageYOffset * 0.09}px`;
window.addEventListener('resize', () => {
    WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    slide1.style.height = `${WHeight}px`;
    slide2.style.height = `${Math.max(WHeight, WWidth / 3840 * 1914)}px`;
    slide3.style.width = `${Math.max(WHeight * 3840 / 1914, WWidth)}px`
    slide3.style.height = `${Math.max(WHeight * 3840 / 1914, WWidth) / (2400 + 5000 / 3121 * 3000) * 3000}px`;
    slide4.style.width = `${Math.max(WHeight * 3840 / 1914, WWidth)}px`
    slide4.style.height = `${Math.max(WHeight * 3840 / 1914, WWidth) / 3840 * 1670}px`;
    back_sofa.style.width = `${WWidth}px`;
    back_sofa.style.bottom = `0px`
});
window.addEventListener('scroll', () => {
    secondUl.style.marginTop = `${WHeight * 0.08 + pageYOffset * 0.09}px`;
});
menuIcon3.addEventListener('click', toggleMenuIcon3);
menuIcon4.addEventListener('click', toggleMenuIcon4);
