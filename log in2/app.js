let btn = document.querySelector(".btn");
let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
let erorr = document.getElementById("erorr");

// console.log(pass+ "" + user );



// function evn(){
//     console.log("hello")
//     window.location.href ="Buttons/index.html";
// }





btn.onclick = function () {
    if (user.value == "taha", pass.value == "taha"){
        window.location.href ="Buttons/index.html";
        console.log("helo")
    }else{
        erorr.innerHTML= "اسم المستخدم او كلمة السر خطأ !"
    }
}
