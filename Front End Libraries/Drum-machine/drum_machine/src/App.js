
import './App.css';
import Switch from "./components/switch";
import Input  from './components/slider';



const App =()=>{
    return (
        <DrumMachine></DrumMachine>
    )
}

const DrumMachine = () =>{
    return(
        <div id="drum">
        <DrumButtons></DrumButtons>
        <DrumSetting></DrumSetting>
        </div>
    )
}

const  DrumButtons = () =>{

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

    

    const playAudio = (index) =>{
        const audio =  new Audio(audioFiles[index].src);
        audio.play();
    }
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
const DrumSetting = () =>{
    return(
        <div id="Settings">     


        <div id="screen">
            
        </div>

<Input></Input>

<Switch/>
  
        </div>
    )
}




export default App;
