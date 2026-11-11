function btnMenu() {
    var click = document.getElementById('List');
    var show = window.getComputedStyle(click).left;
    if (show === "0px") {
        click.style.left = "-100%";
    } else {
        click.style.left = "0px";
    }
}

function btnhref_ekonomi(){
    var href = document.getElementById('btn-1');
    href = window.location.href = "Order/Ekonomi.html";
}

function btnhref_eksekutif(){
    var href = document.getElementById('btn-2');
    href = window.location.href = "Order/Premium.html";
}