const display = document.getElementById("display");


function appendToDisplay(input){
display.value += input; 
}0

function ClearDisplay(){
display.value = "";
}


function calculate(){
  try{
  display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}


