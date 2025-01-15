export function Button({value,handleDisplay,handlesmDisplay}){

   function handleClick(value){
     
      handleDisplay(value)
      
     }

     return(
        <>
        <div className="btn" onClick={()=>handleClick(value)}>{value} </div>
        
        </>
     )
}