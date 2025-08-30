var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = Math.max(window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3)), (window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3))) / ratio);
const WWidth = Math.max(window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)), (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / ratio);
ratio = WWidth / WHeight;
const main = document.getElementById("ab_us_main");
const sofa = document.getElementById("ab_us_sofa");
const H = document.getElementById("ab_us_h");
const pre = document.getElementById("ab_us_pre");
const ul = document.getElementsByClassName("ab_us_ul")[0];
const menuIcon = document.querySelector(`.menu-icon`);  
const foot = document.querySelector('.footer_ul');
const footer1 = document.getElementById("footer");
function toggleMenuIcon() {
    menuIcon.classList.toggle('active');
    foot.classList.toggle('active');
}
sofa.style.bottom = `-${Math.max(0, (WWidth / 3840 * 1914 - WHeight) / (window.devicePixelRatio * 2 / 3))}px`;
sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight + sofa.scrollHeight * 0.5)}px`;
menuIcon.addEventListener('click', toggleMenuIcon);
window.addEventListener('resize', () => {
    sofa.style.bottom = `-${Math.max(0, (WWidth / 3840 * 1482 - WHeight) / (window.devicePixelRatio * 2 / 3))}px`;
    sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight + sofa.scrollHeight * 0.5)}px`;
    const foot_active = document.querySelector('.footer_ul.active');
    if(window.innerWidth > 1300){
        menuIcon.classList.toggle('active');
        foot_active.classList.toggle('active');
    }
});