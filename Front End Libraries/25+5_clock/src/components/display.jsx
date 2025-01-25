import Session from "./session"

export default function Display({display,changeTimer,reset,isBreak,timer,isRunning}){
    return(
        <>
        <div className="display">
            <h2 className="h2" style={{color: timer<60 ? "red" : "black"}}>{isBreak ? "Break" : "Session"}</h2>
            <h1 className="timer" style={{color: timer<60 ? "red" : "black"}}>{display}</h1>
            <div className="row">
            <button className={isRunning ? "btn fa fa-pause" : "btn fa fa-play"}onClick={()=>{
                changeTimer()
            }}></button>
            <button className="btn fa fa-undo" onClick={()=>{
                reset()
            }}></button>
            </div>
        </div></>
    )
}