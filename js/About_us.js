var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3));
const WWidth = window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3));
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
sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight * 1.5)}px`;
menuIcon.addEventListener('click', toggleMenuIcon);
window.addEventListener('resize', () => {
    sofa.style.bottom = `0px`;
    sofa.style.width = `${WWidth / (window.devicePixelRatio * 2 / 3)}px`;
    main.style.height = `${Math.max(WHeight / (window.devicePixelRatio * 2 / 3), ul.scrollHeight * 1.5)}px`;
    if(window.innerWidth > 1400 & menuIcon.classList.contains('active')){
        menuIcon.classList.toggle('active');
        foot.style.height = 'auto';
        foot.classList.toggle('active');
    }
    if(window.innerWidth < 1400 & foot.style.height == 'auto'){
        foot.style.height = '0px';
    }
});