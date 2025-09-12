var WWidth = document.body.clientWidth;
const body = document.querySelector(`body`);
const header_ul = document.getElementsByClassName('header_contact')[0];
const button = document.getElementById('head_but');
function but(){
    header_ul.classList.toggle('active');
}
body.style.width = `${WWidth}px`;
window.addEventListener('resize', () => {
    WWidth = document.body.clientWidth;
    body.style.width = `${WWidth}px`;
});
button.addEventListener("click", but);
