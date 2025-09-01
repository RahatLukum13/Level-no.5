const Ul_button = document.getElementById('button');
const Ul_living = document.getElementsByClassName('living');
const Ul_commercial = document.getElementsByClassName('commercial');
const button1 = Ul_button.children[0].children[0];
const button2 = Ul_button.children[1].children[0];
const button3 = Ul_button.children[2].children[0];
function but(){
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    Ul_button.children[this.name].children[0].disabled = true;
    if (this.name == "0"){
        for (const contain of Ul_living){
            contain.style.display = "block";
        }
        for (const contain of Ul_commercial){
            contain.style.display = "none";
        }
    }
    if (this.name == "1"){
        for (const contain of Ul_living){
            contain.style.display = "none";
        }
        for (const contain of Ul_commercial){
            contain.style.display = "block";
        }
    }
    if (this.name == "2"){
        for (const contain of Ul_living){
            contain.style.display = "block";
        }
        for (const contain of Ul_commercial){
            contain.style.display = "block";
        }
    }
}
button1.addEventListener("click", but);
button2.addEventListener("click", but);
button3.addEventListener("click", but);
