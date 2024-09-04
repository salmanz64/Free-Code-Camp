const App =()=>{
    return (
        <div>
            <Quotes/>
        </div>
    )
}
const Quotes = ()=>{
    const [quotes, setQoutes] = React.useState([])
    React.useEffect(async()=>{
        const res = await fetch('https://dummyjson.com/quotes');
        const data = await res.json();
        setQoutes(data.quotes);
       
        },[])
    
    return(
        <div  id = "quote-box">
        <h2 id="text">  {quotes.length > 0 ? (
   <p>{quotes[3].quote}</p>
               
            ) : (
                <p></p>
            )}</h2>
        <p id="author">-Arthor</p>
        <div id="row">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">hlo</a>
        <button id="new-quote">New Quote</button>
        
        
        </div>
        </div>
    );
}
ReactDOM.render(<App/>,document.getElementById("root"));