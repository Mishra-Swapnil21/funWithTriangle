const sideA = document.querySelector("#side-A");
const sideB = document.querySelector("#side-B");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

checkButton.addEventListener('click' , function checkFOrHypotenuse() {
    hideMessage()
    const sideValueA = Number(sideA.value);
    const sideValueB = Number(sideB.value);
    if(sideValueA != 0){
       if(sideValueB != 0){
          if(sideValueA>0) {
              if(sideValueB>0){
              console.log(sideValueA , sideValueB);
                
              }else{showMessage("Error: Invalid Side B")}
          }else{showMessage("Error: Invalid Side A")}
       }else{showMessage("Error: side B field is empty")}
    }else{showMessage("Error: side A  field is empty")}
})

function hideMessage(){
output.style.display = "none";
}
function showMessage(msg){
output.style.display = "block";
output.innerText = msg;
}

