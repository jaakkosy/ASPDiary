// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var a;
function show_hide() {
    if (a === 1) {
        document.getElementById("instructions").style.display = "inline";
        return a = 0;
    } else {
        document.getElementById("instructions").style.display = "none";
        return a = 1;
    }
}
