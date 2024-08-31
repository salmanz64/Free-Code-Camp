let check = document.getElementById("convert-btn");
let input = document.getElementById("number");
let result = document.getElementById("output")
let box = document.getElementById("box");



function RomanConvert(){
    
  
    checkIfGreaterOrLesser();
    
}


function checkIfGreaterOrLesser(){
    if(parseInt(input.value)<0){
        box.style.height = "50vh";
        result.textContent = "Please enter a number greater than or equal to 1"
    }else if(parseInt(input.value)>3999){
        box.style.height = "50vh"
        result.textContent ="Please enter a number less than or equal to 3999"
}
else if(input.value == ""){
    
    box.style.height = "50vh"
        result.textContent ="Please enter a valid number"
    
}
else{
    let value = parseInt(input.value);
    romanLetter(value);
}
}


check.addEventListener('click', RomanConvert);



let romanCheck = {
    1: "I",
    4:  "IV",
    5:  "V",
    9:  "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"

}
let numbers = Object.keys(romanCheck).map(Number);



function romanLetter (value){
let temp = 0;
result.textContent = "";
while(value>0){
if(numbers.includes(value)){
    result.textContent+=romanCheck[value];
    break;
}else{
   
        for(let i = 0;i < numbers.length ; i++){  
            
            if(numbers[i]<value && numbers[i]!=1000){
                
                temp = numbers[i];

                console.log("the temp is"+temp)
            }else if(numbers[i]===1000 && numbers[i]<value)
            {

                temp = numbers[i];
                value-=temp;
                console.log("the value is "+value)
                result.textContent+=romanCheck[temp];
                break;

            }
            else{
               
                value-=temp;
                console.log("the value is "+value)
                result.textContent+=romanCheck[temp];
                break;
            }
            }
    }
}

}




