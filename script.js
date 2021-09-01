let cal_screen = document.getElementById("screen");
let equal_btn = document.querySelector(".equal-btn");
let clear_screen_btn = document.querySelector(".cancel-btn");
let delete_btn = document.querySelector(".delete-btn");
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
        console.log(typeof cal_screen.value);

        let result = parseInt(cal_screen.value);
        console.log(result);
        console.log(typeof result);

        // let cal_operators = ["*", "+","x", ".", "-","%"];
        // console.log(cal_operators);

        // let first_num;
        // let operator;
        // let second_num;

        // for(let i = 0; i < cal_screen.value.length; i++){
        //     console.log(`value ${i} is now`, cal_screen.value[i]);
        // }
    }
}

//reset the calculator screen to default
function clearCalScreen(){
    if(cal_screen.value !== ""){
        cal_screen.value = "";
    }
}

//delete the first figure from the user input
function deleteUserInput(){
    if(cal_screen.value != "")
    {
        //value that the user just inputted
        let user_current_value = cal_screen.value;

        //removing the last value from user current value
        let new_value = user_current_value.slice(0, -1);
        cal_screen.value = new_value;
    }
}


equal_btn.addEventListener("click", executeCalculation);
clear_screen_btn.addEventListener("click", clearCalScreen);
delete_btn.addEventListener("click", deleteUserInput);
displayClickedElement();