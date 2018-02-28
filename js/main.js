function backHome() {
    window.location.replace("index.html");
}

function jumpPackage(){
    window.location.replace("package.html")
}

function orderModalShow() {
    document.getElementsByClassName("modal")[0].style.display = "block";
}

function orderModalHide() {
    document.getElementsByClassName("modal")[0].style.display = "none";
}