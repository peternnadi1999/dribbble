function myfunction(){
    document.getElementById("mydropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var i;
    for(i=0; i<dropdowns.clientHeight; i++){
        var opendropdown = dropdowns[i];

        if(opendropdown.classList.contains('show')){
            opendropdown.classList.remove('show');
        }
    }
}
}

function dropbotton(){
    document.getElementById("mydropdown2").classList.toggle("show");
}
window.onclick = function(event) {
    if(!event.target.matches('.dropbotton')){
    let dropdownbotton = document.getElementsByClassName("dropdown-content-botton");

    let i;
    for(i=0; i<dropdownbotton.clientHeight; i++){
        var opendropdown = dropdownbotton[i];

        if(opendropdown.classList.contains('show')){
            opendropdown.classList.remove('show');
        }
    }
}
}
