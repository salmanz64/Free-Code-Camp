export default function Session({sessionVal,changeSession}){
    return(
        <>
        <div className="session">
            <h2>Session length</h2>
            <div className="break-length">
            <button className="btn" onClick={()=>changeSession('-')}>-</button>
            <h2>{sessionVal}</h2>
            <button className="btn" onClick={()=>changeSession('+')}>+</button>
            </div>
        </div></>
    )
}