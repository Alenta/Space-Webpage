window.navHover = navHover;
window.navLeave = navLeave;
function navHover(){
    document.getElementById("links").style.display = "";
    document.getElementById("logo").style.alignItems = "";
}
function navLeave(){
    document.getElementById("links").style.display = "none";
    document.getElementById("logo").style.alignItems = "center";
}