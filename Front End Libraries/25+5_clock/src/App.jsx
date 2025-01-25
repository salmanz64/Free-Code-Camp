
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Break from './components/break'
import Display from './components/display'
import Session from './components/session'

function App() {

  const [breakLength,setBreakLength] = useState(5);
  const [sessionLength,setSessionLength] = useState(25);
  const [timer,setTimer] = useState(1500);
  const [display,setDisplay] = useState("25:00")
  const [sessionActive, setSessionActive] = useState(false);
  const [breakActive, setBreakActive] = useState(false);
  

  useEffect(()=>{
    if(timer==0 && !breakActive){
      setTimer(breakLength*60)
      setBreakActive(true);

    }else if(timer ==0 && breakActive){
      setTimer(sessionLength * 60);
      setBreakActive(false)
    }

    if(timer<60 ){
      setDisplay(`00:${timer}`)
    }else if(timer%60 == 0){
      setDisplay(`${Math.floor(timer/60)}:00`)
    }else{
      setDisplay(`${Math.floor(timer/60)}:${timer%60>10 ? timer%60 : `0${timer%60}`}`)
    }

  },[timer])

  let interval = useRef(null);
  function changeTimer(){
    
    let isPlaying = sessionActive;
    isPlaying = !isPlaying;
    

    if(isPlaying){
     interval.current =  setInterval(()=>{
        setTimer((prev)=>prev-1)
      },1000)
      
    }else{
      console.log()
      clearInterval(interval.current)
      
    }
    setSessionActive(isPlaying)
  }


  function reset(){
    if(sessionActive){
      clearInterval(interval.current)
    }
    setBreakLength(5);
    setSessionLength(25);
    setTimer(1500);
    setDisplay("25:00")
    setSessionActive(false);
  }

  function changebreak(val){

    if(breakActive){
      return;
    }
    if(val == '+'){
      setBreakLength((prev)=>prev+1);
    }else{
      if(breakLength>1){
        setBreakLength((prev)=>prev-1);
      }
      
    }

  }

  function changeSession(val){
    if(breakActive){
      return;
    }
    if(val == '+'){
      setSessionLength((prev)=>prev+1);
      setTimer((prev)=>prev+60)
    }else{
      if(sessionLength>1){
        setSessionLength((prev)=>prev-1);
      setTimer((prev)=>prev-60)
      }
      
    }

  }


  return (
    <>
    <div className='container'>
      <div className='lengths'>
      <Break breakval={breakLength} changebreak={changebreak}></Break>
      <Session sessionVal={sessionLength} changeSession={changeSession}></Session>
      </div>
      <Display display={display} changeTimer={
        changeTimer
      } reset={reset} isBreak={breakActive} timer={timer} isRunning={sessionActive}></Display>
      </div>
    </>

  )
}

export default App
