const input = document.getElementById("text-input");
const checkbtn = document.getElementById("check-btn");
const resultView = document.getElementById("result");
const box = document.getElementById("box");

const IsPalindrome = () =>{
    checkAlert();
    let  str=input.value;
    str= str.toLowerCase()
    const regex = /[-_,.()\/\s]/ig;

    str = str.replace(regex,"");
    
    if(str.split("").reverse().join("")==str){
        box.style.height = "50vh";
        resultView.innerHTML=`${input.value} is a palindrome.`;
        clearInput()
    }else{
        box.style.height = "50vh";
        resultView.innerHTML=`${input.value} is not a palindrome.`;
        clearInput()
    }
}
function checkAlert(){
    if(input.value===""){
        alert("Please input a value")
    }
}
function clearInput(){
    input.value=""
}

checkbtn.addEventListener("click",IsPalindrome)