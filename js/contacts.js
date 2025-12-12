var ratio = window.screen.availWidth / window.screen.availHeight;
const WHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
var WWidth = (window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
ratio = WWidth / WHeight;
const main = document.getElementById("contact");
const img = document.getElementById("cont_img");
main.style.height = `${Math.max(WHeight, WWidth / 16 * 9)}px`;
function low(){
    img.style.opacity = "40%";
}
function up(){
    img.style.opacity = "80%";
}
window.addEventListener('resize', () => {
    WWidth = (window.screen.availWidth - (window.outerWidth - window.innerWidth * (window.devicePixelRatio * 2 / 3))) / (window.devicePixelRatio * 2 / 3);
    main.style.height = `${Math.max(WHeight, WWidth / 16 * 9)}px`;
});
low();
setTimeout(up, 2000);
setInterval(low, 4000);
setTimeout(setInterval, 2000, up, 4000);
