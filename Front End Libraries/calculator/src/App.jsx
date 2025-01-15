import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons';
import Display from './components/display';

function App() {
  const [display,setDisplay] = useState("");
  const [smDisplay,setsmDisplay] = useState("");
  const [result,setResult] = useState(0);
  const [operator,setOperator] = useState("");
  let isOperator = false;
  
  
  function handleDisplay(val){
    // function handleDisplay(val) {
    //   if (typeof val !== 'string') {
    //     // Handle numbers
    //     setDisplay((prev) => prev + val);
    //   } else if (val === '=') {
    //     // Handle the '=' operator
    //     if (operator && display !== '') {
    //       let currentResult = result;
    //       const currentNumber = parseInt(display);
    
    //       switch (operator) {
    //         case '+':
    //           currentResult += currentNumber;
    //           break;
    //         case '-':
    //           currentResult -= currentNumber;
    //           break;
    //         case '/':
    //           currentResult /= currentNumber;
    //           break;
    //         case 'x':
    //           currentResult *= currentNumber;
    //           break;
    //         default:
    //           break;
    //       }
    
    //       setResult(currentResult);
    //       setDisplay(currentResult.toString());
    //       setOperator('');
    //     }
    //   } else {
    //     // Handle other operators (+, -, /, x)
    //     if (display !== '') {
    //       if (result === 0) {
    //         setResult(parseInt(display));
    //       } else {
    //         let currentResult = result;
    //         const currentNumber = parseInt(display);
    
    //         switch (operator) {
    //           case '+':
    //             currentResult += currentNumber;
    //             break;
    //           case '-':
    //             currentResult -= currentNumber;
    //             break;
    //           case '/':
    //             currentResult /= currentNumber;
    //             break;
    //           case 'x':
    //             currentResult *= currentNumber;
    //             break;
    //           default:
    //             break;
    //         }
    
    //         setResult(currentResult);
    //       }
    
    //       setDisplay('');
    //       setOperator(val);
    //     }
    //   }
    // }
   
    if(typeof val != 'string'){
      setDisplay((prev)=>prev+val);


    } 
    else if(typeof val == '='){

      

    }


      setOperator(val)
      


      if(result==0 && display !=""){
        setResult(parseInt(display))
      }else if(val == "="){
        switch(operator){
                case "+": setResult(prev=>prev+parseInt(display))
                          break;
                case "-": setResult(prev=>prev-parseInt(display))
                          break;
                case "/": setResult(prev=>prev/parseInt(display))
                          break;
                case "x": setResult(prev=>prev*parseInt(display))
                          break;
              }
        
      }
        else{
         switch(val){
          case "+": setResult(prev=>prev+parseInt(display))
                    break;
          case "-": setResult(prev=>prev-parseInt(display))
                    break;
          case "/": setResult(prev=>prev/parseInt(display))
                    break;
          case "x": setResult(prev=>prev*parseInt(display))
                    break;
        }
      }

      if(val=="="){
        setDisplay(result)
      }else{
        setDisplay(val)
      }
      
      console.log(result)
    }

    
  }
  function handlesmDisplay(val){
   
      setsmDisplay((prev)=>prev+val);
    
      
  }

  return(
    <>
    <div className='container'>
      <Display display={display} smDisplay={smDisplay}></Display>
      <Buttons handleDisplay={handleDisplay} handlesmDisplay={handlesmDisplay}></Buttons>
    </div>
    
    </>
  )
     
}

export default App;
