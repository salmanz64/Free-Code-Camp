import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons';
import Display from './components/display';

function App() {
  const [display,setDisplay] = useState("0");
  const [smDisplay,setsmDisplay] = useState("");
  const [result,setResult] = useState(0);
  const [operator,setOperator] = useState("");
  const [flag,setFlag] = useState(false)
  
  
  
    function handleDisplay(val) {
      let currentResult = 0;
      if (typeof val !== 'string' || val === '.') {
        // Handle numbers
        if (display === '0' && val == '.') {
          setDisplay((prev) => prev + val);
        }
        else if(display == '0' || flag){
          setDisplay(val.toString());
          setFlag(false)
        }else{
          setDisplay((prev) => prev + val);
        }
        
      } else if (val === '=') {
        // Handle the '=' operator
        if (operator && display !== '') {
           currentResult = result;
          const currentNumber = parseFloat(display);
    
          switch (operator) {
            case '+':
              currentResult += currentNumber;
              break;
            case '-':
              currentResult -= currentNumber;
              break;
            case '/':
              currentResult /= currentNumber;
              break;
            case 'x':
              currentResult *= currentNumber;
              break;
            default:
              break;
          }
    
          setResult(currentResult);
          setDisplay(currentResult.toString());
          setOperator('');
        }
      }else if(val =="Reset"){
        setDisplay("0")
        setResult(0)
        setFlag(false)
        setOperator("")
      }else if(val == "Del"){
        setDisplay(display.slice(0, -1))
        setResult(parseFloat(display.slice(0,-1)))
      }
       else {
        // Handle other operators (+, -, /, x)
        
        if (display !== '') {

          if (result === 0) {
            setResult(parseFloat(display));
          } else {
            let currentResult = result;
            const currentNumber = parseFloat(display);
            
            switch (operator) {
              case '+':
                currentResult += currentNumber;
                break;
              case '-':
                currentResult -= currentNumber;
                break;
              case '/':
                currentResult /= currentNumber;
                break;
              case 'x':
                currentResult *= currentNumber;
                break;
              default:
                break;
            }
    
            setResult(currentResult);
          }
    
          setDisplay(val);
          setFlag(true)
          setOperator(val);
         
          
        }
      }
      if(val == "="){
        setsmDisplay((prev)=>prev+val+currentResult)
      }else{
        setsmDisplay((prev)=>prev+val)
      }
    }
   
   



  return(
    <>
    <div className='container'>
      <Display display={display} smDisplay={smDisplay}></Display>
      <Buttons handleDisplay={handleDisplay} ></Buttons>
    </div>
    
    </>
  )
     
}

export default App;
