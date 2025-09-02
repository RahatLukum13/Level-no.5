var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3));
const WWidth = window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3));
ratio = WWidth / WHeight;
const slide1 = document.getElementById("slide");
const slide2 = document.getElementById("slide12");
const background1 = document.getElementsByClassName("background")[0];
const background2 = document.getElementById("background_2");
const back_sofa = document.getElementById("back_sofa");
const secondUl = document.getElementById("slide_ul");
slide1.style.height = `${WHeight / (window.devicePixelRatio * 2 / 3)}px`;
slide2.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), WWidth / (window.devicePixelRatio * 2 / 3) / 3840 * 1914)}px`;
background1.style.height = `${Math.max(WHeight, WWidth)}px`;
background2.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), WWidth / (window.devicePixelRatio * 2 / 3) / 3840 * 1914)}px`;
back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
back_sofa.style.bottom = `0px`
secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.08 + pageYOffset * 0.09}px`;
window.addEventListener('resize', () => {
    slide1.style.height = `${WHeight / (window.devicePixelRatio * 2 / 3)}px`;
    slide2.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), WWidth / (window.devicePixelRatio * 2 / 3) / 3840 * 1914)}px`;
    back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    back_sofa.style.bottom = `0px`
});
window.addEventListener('scroll', () => {
    secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.08 + pageYOffset * 0.09}px`;
});