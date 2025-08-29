const WHeight2 = window.screen.availHeight;
const WWidth2 = window.screen.availWidth;
const header = document.getElementById("Header");
const menu = document.getElementById("Menu");
const footer = document.getElementById("footer");
header.style.width = `calc(100dvw - ${WHeight2 / (window.devicePixelRatio * 2 / 3) * 0.06}px)`;
header.style.margin = `${WHeight2 / (window.devicePixelRatio * 2 / 3) * 0.03}px`;
header.style.fontSize = `${(WWidth2 / 110) / (window.devicePixelRatio * 2 / 3) ** 0.6}px`;
menu.style.height = WHeight2 / 18 / (window.devicePixelRatio * 2 / 3) ** 0.6;
footer.style.fontSize = `${(WWidth2 / 95) / (window.devicePixelRatio * 2 / 3) ** 0.6}px`;
window.addEventListener('resize', () => {
    header.style.width = `calc(100dvw - ${WHeight2 / (window.devicePixelRatio * 2 / 3) * 0.06}px)`;
    header.style.margin = `${WHeight2 / (window.devicePixelRatio * 2 / 3) * 0.03}px`;
    header.style.fontSize = `${(WWidth2 / 110) / (window.devicePixelRatio * 2 / 3) ** 0.6}px`;
    menu.style.height = WHeight2 / 18 / (window.devicePixelRatio * 2 / 3) ** 0.6;
    footer.style.fontSize = `${(WWidth2 / 95) / (window.devicePixelRatio * 2 / 3) ** 0.6}px`;
});