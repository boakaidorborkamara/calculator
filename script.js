let cal_screen = document.getElementById("screen");


let cal_btn = document.getElementsByClassName("btn");
console.log(cal_btn);

for(let i = 0; i < cal_btn.length; i++){
    // console.log(cal_btn[i].innerHTML);
    cal_btn[i].addEventListener("click", displayElement);
}

// display element
function displayElement(e){
    cal_btn.innerHTML = e.target.value;
    console.log(cal_screen);
}