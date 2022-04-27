let bars = document.querySelector(".bars");
let nav_items = document.querySelector(".nav-items")
let login = document.getElementById("login")




bars.onclick= function (){
    nav_items.classList.toggle("activ")
}

login.onclick = function () {
    window.location.href ="log in2/login.html";
    console.log("hello")
}


