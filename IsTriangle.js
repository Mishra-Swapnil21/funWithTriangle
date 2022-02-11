const checkButton = document.querySelector("#click-button");
const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const output = document.querySelector("#output")



checkButton.addEventListener('click' , function ValidateFirstSecondThirdAngle()
{  hideMessage()
   const firstAng = Number(firstAngle.value);
   const secondAng = Number(secondAngle.value);
   const thirdAng  = Number(thirdAngle.value); 
    if (firstAng!=0) {
        if(secondAng!=0){
            if(thirdAng!=0){
                if(firstAng>0){
                    if(secondAng>0){
                        if(thirdAng>0){
                            const sum= firstAng + secondAng +thirdAng;
                             
                                if(sum === 180){showMessage("Yes, it is a triangle")
                                }else {showMessage("No, it is not a triangle")}
                        }else{showMessage("Error:- Invalid third angle")}
                    }else{showMessage("Error:- Invalid second angle")}
                }else{showMessage("Error:- Invalid first angle")}
            }else{showMessage("Error:- Degree field is empty")}
        }else{showMessage("Error:- Degree field is empty")}      
   }else{showMessage("Error:- Degree field is empty")}
});

function hideMessage () {
    output.style.display = "none";
}

function showMessage (msg) {
    output.style.display = "block";
    output.innerText = msg;
    
}


