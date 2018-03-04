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

function fightResult() {
    alert("Your Search Has Been Updated");
}

function openMobileMenu() {
    var status = document.getElementsByClassName('mobile-nav')[0].style.display;
    if(status == "none"){
        document.getElementsByClassName("mobile-nav")[0].style.display = "block";
    }else {
        document.getElementsByClassName("mobile-nav")[0].style.display = "none";
    }

}