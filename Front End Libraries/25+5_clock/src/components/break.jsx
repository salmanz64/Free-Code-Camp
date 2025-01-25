


export default function Break({breakval,changebreak}){
    return(
        <>
        <div className="break">
            <h2>Break length</h2>
            <div className="break-length">
            <button className="btn" onClick={()=>changebreak('-')}>-</button>
            <h2>{breakval}</h2>
            <button className="btn" onClick={()=>changebreak('+')}>+</button>
            </div>
        </div>
        </>
    )
}