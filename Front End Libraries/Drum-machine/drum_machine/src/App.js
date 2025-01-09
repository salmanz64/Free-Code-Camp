import React, { useState } from 'react';
import './App.css';
import Switch from "./components/switch";
import Input  from './components/slider';



const App =()=>{
    return (
        <DrumMachine></DrumMachine>
    )
}

const DrumMachine = () =>{
    const audioFiles = [
        {name:"Heater 1",src:process.env.PUBLIC_URL+"/assets/audio/Heater-1.mp3"},
        {name:"Heater 2",src:process.env.PUBLIC_URL+"/assets/audio/Heater-2.mp3"},
        {name:"Heater 3",src:process.env.PUBLIC_URL+"/assets/audio/Heater-3.mp3"},
        {name:"Heater 4",src:process.env.PUBLIC_URL+"/assets/audio/Heater-4.mp3"},
        {name:"Kick and Hat",src:process.env.PUBLIC_URL+"/assets/audio/Kick_n_Hat.mp3"},
        {name:"kick",src:process.env.PUBLIC_URL+"/assets/audio/kick.mp3"},
        {name:"open-hh",src:process.env.PUBLIC_URL+"/assets/audio/open-hh.mp3"},
        {name:"clap",src:process.env.PUBLIC_URL+"/assets/audio/clap.mp3"},
        {name:"closedhh",src:process.env.PUBLIC_URL+"/assets/audio/closedhh.mp3"}, 
        
    ]

    const [display,setDisplay] = useState("");
    const [volume,setVolume] = useState(0.5);
    const [isPower,setPower] = useState(true);

    function handleDisplay(value){
        setDisplay(value);
    }

   
    

    function handleVolume(value){
        if (value >= 0 && value <= 100) {
            setVolume(value / 100);
        }
        
    }
    function handlePower(){
        setPower(prev=>!prev);
    }
    
    

    const playAudio = (index) =>{
        if (isPower) {
        const audio = new Audio(audioFiles[index].src);
        audio.volume = volume;
        
        setDisplay(audioFiles[index].name)
        audio.play();
        }
       
    }
    return(
        <div id="drum">
        <DrumButtons playAudio={playAudio}></DrumButtons>
        <DrumSetting display={display} handleDisplay={handleDisplay} setvolume={handleVolume} power={handlePower} isPower={isPower} volume={volume}></DrumSetting>
        </div>
    )
}

const  DrumButtons = ({playAudio}) =>{

    return (
        <div  id="drum-container">

            <button className="drum-pad" id="Q" onClick={()=>playAudio(0)} >Q</button>
            <button className="drum-pad" id="W" onClick={()=>playAudio(1)}>W</button>
            <button className="drum-pad" id="E" onClick={()=>playAudio(2)}>E</button>
            <button className="drum-pad" id="A" onClick={()=>playAudio(3)}>A</button>
            <button className="drum-pad" id="S" onClick={()=>playAudio(4)}>S</button>
            <button className="drum-pad" id="D" onClick={()=>playAudio(5)}>D</button>
            <button className="drum-pad" id="Z" onClick={()=>playAudio(6)}>Z</button>
            <button className="drum-pad" id="X" onClick={()=>playAudio(7)}>X</button>
            <button className="drum-pad" id="C" onClick={()=>playAudio(8)}>C</button>
            
        </div>
    )
}
const DrumSetting = ({display,handleDisplay,setvolume,power,isPower}) =>{
    
    
    

    return(

        <div id="Settings">
            <label id='power'>{isPower ? "Switch On" : "Switch Off"}</label>     
          <Switch power={power}/>

        <div id="screen">
            {display}
        </div>

        
<Input handleDisplay={handleDisplay} volumechange={setvolume}></Input>


  
        </div>
    )
}




export default App;
