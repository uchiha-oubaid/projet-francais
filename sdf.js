const backHome = document.getElementById("back-to-home");
const backEsc = document.getElementById("esclavage");

backHome.addEventListener("click", () => { // for the home page
    window.open("./index.html", "_blank");
});

backEsc.addEventListener("click", () => { // for the esclavage
    window.open("./lesclavade.html", "_blank");
});