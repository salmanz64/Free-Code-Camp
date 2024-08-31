const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkbtn = document.getElementById("check-btn");
const clearbtn = document.getElementById("clear-btn");

const regex = /^[1]?\s?-?(?:\(\d{3}\)|\d{3})\s?-?\(?\d{3}\)?\s?-?\(?\d{4}\)?\s?$/;

const check =()=>{
    
    if(input.value === ""){
        alert( "Please provide a phone number" ); 
        return;
    }else{
        if(regex.test(input.value)){
                result.innerText += "Valid US number: "+ input.value + "\n" ;
                input.value = ""
        }else{
            result.innerText += "Invalid US number: "+ input.value + "\n"
            input.value = ""
        }
}}
const clear = () =>{
    result.innerText="";
}



checkbtn.addEventListener("click",check)
clearbtn.addEventListener("click",clear);

