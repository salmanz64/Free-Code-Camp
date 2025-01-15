import { useState } from "react"


export default function Display({display,smDisplay}){

    
    return (<>
    <div className="display">
        <div className="small-display">{smDisplay}</div>
        <div className="big-display">{display}</div>
    </div>
    </>)
}