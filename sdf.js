const backHome = document.getElementById("back-to-home");
const backEsc = document.getElementById("esclavage");
const imgEsc = document.getElementById("images");

backHome.addEventListener("click", () => { // for the home page
    window.open("./index.html", "_self");
});

backEsc.addEventListener("click", () => { // for the esclavage
    window.open("./lesclavade.html", "_self");
});

imgEsc.addEventListener("click", () => {
    window.open("./images_sdf.html", "_self");
});