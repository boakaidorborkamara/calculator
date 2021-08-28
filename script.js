let cal_screen = document.getElementById("screen");
let equal_btn = document.querySelector(".equal-btn");
let clear_screen_btn = document.querySelector(".cancel-btn");
let cal_btn = document.getElementsByClassName("btn");

// display element on the calculator screen when a btn is clicked
function displayClickedElement(){
    for(let i = 0; i < cal_btn.length; i++){
        // console.log(cal_btn[i].innerHTML);
        cal_btn[i].addEventListener("click", (e)=>{
            let clicked_btn = e.target.innerText;
            cal_screen.value += clicked_btn;
            
            console.log(clicked_btn);
        });
    }
    
}

// execute calculation base upon the user input 
function executeCalculation(){
    if(cal_screen.value !== ""){
        console.log("screen is not empty");

        let first_num;
        let second_num;
        let operator;

        for(let i = 0; i < cal_screen.value.length; i++){
            console.log(`value ${i} is now`, cal_screen.value[i]);
        }
    }
}

//reset the calculator screen to default
function clearCalScreen(){
    if(cal_screen.value !== ""){
        cal_screen.value = "";
    }
}


equal_btn.addEventListener("click", executeCalculation);
clear_screen_btn.addEventListener("click", clearCalScreen);
displayClickedElement();