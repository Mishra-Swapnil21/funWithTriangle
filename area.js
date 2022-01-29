const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");


checkButton.addEventListener('click' , function validateBaseAndHeight(){
    const baseValue = Number(base.value);
    const heightValue = Number(height.value);
    if(baseValue!=0){
       if(heightValue!=0){
          if(baseValue>0){
              if(heightValue>0){

              }else{showMessage("Error:- Invalid Height Value")}
          }else{showMessage("Error:- Invalid Base Value")}
       }else{showMessage("Error:- Base field is empty")}
    }else{showMessage("Error:- Base field is empty")}
});










function showMessage(msg) {
output.style.display = "block";
output.innerText = msg;
}

function hideMessage() 
{
output.style.display = "none";
}


