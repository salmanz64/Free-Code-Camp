import Switch from "./components/Switch";




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
    return (
        <div  id="drum-container">

            <button className="drum-pad" id="Q" >Q</button>
            <button className="drum-pad" id="W" >W</button>
            <button className="drum-pad" id="E" >E</button>
            <button className="drum-pad" id="A" >A</button>
            <button className="drum-pad" id="S" >S</button>
            <button className="drum-pad" id="D" >D</button>
            <button className="drum-pad" id="Z" >Z</button>
            <button className="drum-pad" id="X" >X</button>
            <button className="drum-pad" id="C" >C</button>
            
        </div>
    )
}
const DrumSetting = () =>{
    return(
        <div id="Settings">     

<div class="container">
  <input type="checkbox" name="checkbox" id="checkbox" />
  <label for="checkbox" class="label"> </label>
</div>
<Switch/>
        <div id="screen">
            
        </div>
       
<label className="slider">
      <input type="range" className="level"/>
      <svg className="volume"    width="512" height="512"  >
          <g>
              <path d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z" fill="currentColor" data-original="#000000"></path>
              <path d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z" fill="currentColor" data-original="#000000"></path>
          </g>
      </svg>
  </label>

<div class="container">
  <input type="checkbox" name="checkbox" id="checkbox" />
  <label for="checkbox" class="label"> </label>
</div>
<Switch/>
  
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById("root"));
