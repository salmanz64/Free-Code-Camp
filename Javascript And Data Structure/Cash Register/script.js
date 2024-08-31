
const boxScrn = document.getElementById("box-scrn");
const inputbtn = document.getElementById("cash");
const purchasebtn = document.getElementById("purchase-btn");
const change = document.getElementById("change-due")
const screen = document.getElementById("inner-scrn")


let isEmpty = false;
let price = 3.26;
let cid = 
[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]



screen.innerHTML = `<p>Total: $${price}</p>`


let i=0;
cid.forEach((val)=>{
  
  boxScrn.innerHTML +=   `<p>${val[0].charAt(0)+val[0].slice(1,val[0].length).toLowerCase()+"s"}: <span id="${i}">$${val[1]}</span></p>`

  i=i+1;
})
const refreshDrawer=()=>{
  let j=0;
  cid.forEach((val)=>{
    document.getElementById(j).innerText=val[1].toFixed(2);
    j+=1;
})
}



const checkAlert=()=>{
if(inputbtn.value < price){
  alert("Customer does not have enough money to purchase the item")
}else if(inputbtn.value == price){
  change.style.display = "flex";
  change.innerHTML = "";
  change.innerHTML = `No change due - customer paid with exact cash`
}else{
  checkDue()
  
}
}

let valuesOfMoney = [0.01,0.05,0.10,0.25,1,5,10,20,100]

const displayBalance=(due,statusname)=>{
  change.style.display = "flex";
  change.innerText = "";
  change.innerHTML = `<p>Status: ${statusname}</p>`
  Object.entries(due).forEach(([key,val])=>{
    change.innerHTML += 
    `<p>${key}: $${Math.floor(val*100)/100}</p>`
  })

}


const checkDue=()=>{

  let value = inputbtn.value
  let changedue = value-price;
  let result={}
  const status = ["OPEN","INSUFFICIENT_FUNDS","CLOSED"]
  
  let i=valuesOfMoney.length-1;
    while(i>=0){
    if(changedue>=valuesOfMoney[i] &&cid[i][1]>0){
        
      
       isNaN(result[cid[i][0]]) ? (result[cid[i][0]]) = valuesOfMoney[i] :(result[cid[i][0]] += valuesOfMoney[i]);
        
        

       changedue-=valuesOfMoney[i]
       cid[i][1]-=valuesOfMoney[i];

       changedue = Math.round(changedue*100)/100
      cid[i][1] = Math.round(cid[i][1] *100)/100
        console.log(changedue)
        console.log(cid[i])
        console.log(result)
        

        
        
        if(cid[i][1]<=0){
          cid[i][1]=0;
          valuesOfMoney.splice(i,1)

          console.log(valuesOfMoney)
          i--;
        }
        
        refreshDrawer();
        
    }else{
      i--;
    }
    
      
  }
  for(let i =0;i<cid.length;i++){
    if(cid[i][1]==0){
      isEmpty = true;
    }else{
      isEmpty = false;
      break;
    }
  }
  if(changedue  ==0  && !isEmpty){
    displayBalance(result,status[0]);
      }
      else if(changedue==0 && isEmpty){
 
  displayBalance(result,status[2])
      }
      
      else{
        
        result = {}
    displayBalance(result,status[1])
      }
}



purchasebtn.addEventListener("click",checkAlert);