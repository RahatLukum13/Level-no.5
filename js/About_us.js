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
    const foot_active = document.querySelector('.footer_ul.active');
    foot.style.height = '0px';
    foot_active.style.height = `${main.clientWidth * 0.15 + 6 * (WWidth2 / 95) / (window.devicePixelRatio * 2 / 3)}px`;
}
sofa.style.bottom = `-${Math.max(0, (WWidth / 3840 * 1914 - WHeight) / (window.devicePixelRatio * 2 / 3))}px`;
sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
H.style.fontSize = `${((WWidth / 33) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.01) / (window.devicePixelRatio * 2 / 3)}px`;
pre.style.fontSize = `${((WWidth / 120) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.005) / (window.devicePixelRatio * 2 / 3)}px`;
main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight + sofa.scrollHeight * 0.5)}px`;
menuIcon.addEventListener('click', toggleMenuIcon);
window.addEventListener('resize', () => {
    sofa.style.bottom = `-${Math.max(0, (WWidth / 3840 * 1482 - WHeight) / (window.devicePixelRatio * 2 / 3))}px`;
    sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    H.style.fontSize = `${((WWidth / 33) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.01) / (window.devicePixelRatio * 2 / 3)}px`;
    pre.style.fontSize = `${((WWidth / 120) - (WWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3)) * 0.005) / (window.devicePixelRatio * 2 / 3)}px`;
    main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight + sofa.scrollHeight * 0.5)}px`;
    const foot_active = document.querySelector('.footer_ul.active');
    foot_active.style.height = `${main.clientWidth * 0.15 + 6 * (WWidth2 / 95) / (window.devicePixelRatio * 2 / 3)}px`;
    if(window.innerWidth > 800){
        menuIcon.classList.toggle('active');
        foot_active.style.height = 'auto';
        foot_active.classList.toggle('active');
    }
});