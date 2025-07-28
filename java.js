function toggleMenu() {
    document.getElementById("side-menu").classList.toggle('active')
}
 var loader_var;
 function loaderFunction() {

    loader_var = setTimeout(showPage, 0);
 }
 function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("main").style.display="block"
 }

 //message sending//!SECTION
 