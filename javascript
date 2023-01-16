let cont1 = document.getElementById("cont1");
let btn1 = document.getElementById("btn1");

let cont2 = document.getElementById("cont2");
let btn2 = document.getElementById("btn2");

let cont3 = document.getElementById("cont3");
let btn3 = document.getElementById("btn3");

let cont4 = document.getElementById("cont4");
let btn4 = document.getElementById("btn4");

let resetbtn = document.getElementById("resetbtn");

let change1 = function() {
    btn1.style.backgroundColor = "grey";
    cont1.classList.remove("btns-div");
    cont1.classList.add("btns-div-c");
}

let change2 = function() {
    btn2.style.backgroundColor = "brown";
    cont2.classList.remove("btns-div");
    cont2.classList.add("btns-div-c");
}

let change3 = function() {
    btn3.style.backgroundColor = "orange";
    cont3.classList.remove("btns-div");
    cont3.classList.add("btns-div-c");
}

let change4 = function() {
    btn4.style.backgroundColor = "black";
    cont4.classList.remove("btns-div");
    cont4.classList.add("btns-div-c");
}

let reset = function() {
    btn1.style.backgroundColor = "yellow";
    cont1.classList.add("btns-div");
    cont1.classList.remove("btns-div-c");

    btn2.style.backgroundColor = "blue";
    cont2.classList.add("btns-div");
    cont2.classList.remove("btns-div-c");

    btn3.style.backgroundColor = "red";
    cont3.classList.add("btns-div");
    cont3.classList.remove("btns-div-c");

    btn4.style.backgroundColor = "green";
    cont4.classList.add("btns-div");
    cont4.classList.remove("btns-div-c");
}
