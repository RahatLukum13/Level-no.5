var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = Math.max(window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3)), (window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3))) / ratio);
const WWidth = Math.max(window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)), (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / ratio);
ratio = WWidth / WHeight;
const slides = document.getElementsByClassName("slide");
const video = document.getElementById("video1");
const background1 = document.getElementsByClassName("background")[0];
const background2 = document.getElementById("background_2");
const back_sofa = document.getElementById("back_sofa");
const secondUl = document.getElementById("slide_ul");
const sec_slide_pre = document.getElementById("sec_slide_pre");
const thi_slide_pre = document.getElementById("thi_slide_pre");
const thirdUl = document.getElementById("Slide3");
const for_slide  = document.getElementById("for_slide");
const class_prostr = document.getElementsByClassName("Wrem_Regular");
const prostrs = document.getElementsByClassName("TTN_ThinItalic");
for(const slide of slides){
    slide.style.height = `${WHeight / (window.devicePixelRatio * 2 / 3)}px`;
}
background1.style.height = `${Math.max(WHeight, WWidth)}px`;
background2.style.height = `${WHeight}px`;
back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
back_sofa.style.bottom = `-${(WWidth / 3840 * 1482 - WHeight / 1914 * 1482) / (window.devicePixelRatio * 2 / 3)}px`
secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.1 + pageYOffset * 0.09}px`;
window.addEventListener('resize', () => {
    for(const slide of slides){
        slide.style.height = `${WHeight / (window.devicePixelRatio * 2 / 3)}px`;
    }
    back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    back_sofa.style.bottom = `-${(WWidth / 3840 * 1482 - WHeight / 1914 * 1482) / (window.devicePixelRatio * 2 / 3)}px`
});
window.addEventListener('scroll', () => {
    secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.1 + pageYOffset * 0.09}px`;
});