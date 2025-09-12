var ratio = window.screen.availWidth / window.screen.availHeight;
var WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
var WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
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
sofa.style.bottom = `0px`;
sofa.style.width = `${WWidth}px`;
main.style.height = `${Math.max(WHeight, ul.scrollHeight + WWidth / 4, sofa.scrollHeight)}px`;
menuIcon.addEventListener('click', toggleMenuIcon);
window.addEventListener('resize', () => {
    WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    WWidth = (window.screen.availWidth - (window.outerWidth - document.body.clientWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    sofa.style.bottom = `0px`;
    sofa.style.width = `${WWidth}px`;
    main.style.height = `${Math.max(WHeight, ul.scrollHeight + WWidth / 4, sofa.scrollHeight)}px`;
    if(window.innerWidth > 1400 & menuIcon.classList.contains('active')){
        menuIcon.classList.toggle('active');
        foot.style.height = 'auto';
        foot.classList.toggle('active');
    }
    if(window.innerWidth < 1400 & foot.style.height == 'auto'){
        foot.style.height = '0px';
    }
});