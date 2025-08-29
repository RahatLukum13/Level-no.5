var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = Math.max(window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3)), (window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3))) / ratio);
const WWidth = Math.max(window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)), (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / ratio);
ratio = WWidth / WHeight;
const slides = document.getElementsByClassName("slide");
const slides2 = document.getElementsByClassName("slide2");
const video = document.getElementById("video1");
const background = document.getElementById("background_2");
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
for(const slide2 of slides2){
    slide2.style.height = `${(Math.max(WHeight / (window.devicePixelRatio * 2 / 3), thirdUl.scrollHeight))}px`;
}
if (WHeight / (window.devicePixelRatio * 2 / 3) * 16 / 9 <= window.innerWidth){
    video.style.height = "auto";
    video.style.width = "100vw";
}
else{
    video.style.height = "100%";
    video.style.width = "auto";
}
background.style.height = `${WHeight}px`;
back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
back_sofa.style.bottom = `-${(WWidth / 3840 * 1482 - WHeight / 1914 * 1482) / (window.devicePixelRatio * 2 / 3)}px`
secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.1 + pageYOffset * 0.09}px`;
sec_slide_pre.style.fontSize = `${((WWidth / 47.5) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.02) / (window.devicePixelRatio * 2 / 3)}px`;
thi_slide_pre.style.fontSize = `${((WWidth / 110) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.005) / (window.devicePixelRatio * 2 / 3)}px`;
for(const prost of class_prostr){
    prost.style.fontSize = `${((WWidth / 33) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.01) / (window.devicePixelRatio * 2 / 3)}px`;
}
for(const prostr of prostrs){
    prostr.style.fontSize = `${((WWidth / 120)) / (window.devicePixelRatio * 2 / 3)}px`;
}
thirdUl.style.marginTop = `${WHeight * 0.14 / (window.devicePixelRatio * 2 / 3)}px`;
thirdUl.style.marginBottom = `${WHeight * 0.06 / (window.devicePixelRatio * 2 / 3)}px`;
for_slide.style.marginTop = `${WHeight * 0.18 / (window.devicePixelRatio * 2 / 3)}px`;
for_slide.style.marginBottom = `${WHeight * 0.02 / (window.devicePixelRatio * 2 / 3)}px`;
window.addEventListener('resize', () => {
    for(const slide of slides){
        slide.style.height = `${WHeight / (window.devicePixelRatio * 2 / 3)}px`;
    }
    for(const slide2 of slides2){
        slide2.style.height = `${(Math.max(WHeight / (window.devicePixelRatio * 2 / 3), thirdUl.scrollHeight))}px`;
    }
    if (WHeight / (window.devicePixelRatio * 2 / 3) * 16 / 9 <= window.innerWidth){
        video.style.height = "auto";
        video.style.width = "100vw";
    }
    else{
        video.style.height = "100%";
        video.style.width = "auto";
    }
    back_sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    back_sofa.style.bottom = `-${(WWidth / 3840 * 1482 - WHeight / 1914 * 1482) / (window.devicePixelRatio * 2 / 3)}px`
    sec_slide_pre.style.fontSize = `${((WWidth / 47.5) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.02) / (window.devicePixelRatio * 2 / 3)}px`;
    secondUl.style.marginLeft = `${((WWidth * 0.1) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.1) / (window.devicePixelRatio * 2 / 3)}px`;
    thi_slide_pre.style.fontSize = `${((WWidth / 110) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.005) / (window.devicePixelRatio * 2 / 3)}px`;
    for(const prost of class_prostr){
        prost.style.fontSize = `${((WWidth / 33) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.01) / (window.devicePixelRatio * 2 / 3)}px`;
    }
    for(const prostr of prostrs){
        prostr.style.fontSize = `${((WWidth / 120)) / (window.devicePixelRatio * 2 / 3)}px`;
    }
    thirdUl.style.marginTop = `${WHeight * 0.14 / (window.devicePixelRatio * 2 / 3)}px`;
    thirdUl.style.marginBottom = `${WHeight * 0.06 / (window.devicePixelRatio * 2 / 3)}px`;
    for_slide.style.marginTop = `${WHeight * 0.18 / (window.devicePixelRatio * 2 / 3)}px`;
    for_slide.style.marginBottom = `${WHeight * 0.06 / (window.devicePixelRatio * 2 / 3)}px`;
});
window.addEventListener('scroll', () => {
    secondUl.style.marginTop = `${WHeight / (window.devicePixelRatio * 2 / 3) * 0.1 + pageYOffset * 0.09}px`;
});