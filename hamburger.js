const hamburger = document.getElementById("hamburger");
const linktxt = document.getElementsByClassName("linktxt");
const logo = document.getElementById("logo");
const logoMobile = document.getElementById("logo-mobile");

hamburger.addEventListener("click", ()=>{
    var prop, img
    if (linktxt[0].style.display === "none") {
        prop = "block"
        logoMobile.style.display = "none"
        logo.style.display = "block"
        hamburger.innerHTML = "<span class='material-symbols-outlined'>close</span>"
    } else {
        prop = "none"
        logoMobile.style.display = "block"
        logo.style.display = "none"
        hamburger.innerHTML = "<span class='material-symbols-outlined'>chevron_right</span>"
    }
    for (let i = 0; i < linktxt.length; i++) {
        linktxt[i].style.display = prop;
    }
})