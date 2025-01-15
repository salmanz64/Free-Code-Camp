import { Button } from "../utils/button"

export default function Buttons({handleDisplay,handlesmDisplay}){

    let buttons = [7,8,9,"Del",4,5,6,"+",1,2,3,"-",".",0,"/","x","Reset","="]
    return (
        <>
        <div className="btn-container">
                {buttons.map((e)=>{
                    return <Button  value={e} handleDisplay={handleDisplay} handlesmDisplay={handlesmDisplay}/>
                })}
                
        </div>
        </>
    )
}