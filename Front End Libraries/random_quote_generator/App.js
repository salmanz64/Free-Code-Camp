const App =()=>{
    return (
        <div>
            <Quotes/>
        </div>
    )
}

const Quotes = ()=>{
    const [newquote,changeQuote] = React.useState({
        quote: "",
        author: "",

    });
    const [allQuotes, setAllQoutes] = React.useState([]);
    const body = document.body;
    const btn = document.getElementById("new-quote")
    React.useEffect(()=>{
        const fetchdata=async()=>{
            
        const res = await fetch('https://dummyjson.com/quotes');
        const data = await res.json();
        setAllQoutes(data.quotes);
         displayQuote(data.quotes);

        }
       fetchdata();
        },[]);
        const displayColor = () => {
            const colors = [
                [71, 46, 50],
                [251, 105, 100],
                [115, 168, 87],
                [22, 160, 133],
                [44, 62, 80],
                [155, 89, 182],
                [243, 156, 18]
            ];
            const random = Math.floor(Math.random() * colors.length);
            body.style.backgroundColor = `rgb(${colors[random][0]}, ${colors[random][1]}, ${colors[random][2]})`;
            body.style.color = `rgb(${colors[random][0]}, ${colors[random][1]}, ${colors[random][2]})`;
            btn.style.backgroundColor = `rgb(${colors[random][0]}, ${colors[random][1]}, ${colors[random][2]})`;
        }
        
        
       
    
        
        function displayQuote(quotes){
            if(quotes.length>0){
                const randomIndex = Math.floor(Math.random()* quotes.length)
            changeQuote({
                quote: quotes[randomIndex].quote,
                author: quotes[randomIndex].author
            })
            displayColor();
            }
            
            
        }

    
    return(
        <div  id = "quote-box">
        <h2 id="text">{newquote.quote ? (
   <p>"{newquote.quote}</p>) : (
                <p>Loading...</p>
            )}</h2>
        <p id="author">- {newquote.author}</p>
        <div id="row">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank"></a>
        <button id="new-quote" onClick={()=>displayQuote(allQuotes)}>New Quote</button>
        
        
        </div>
        </div>
    );
}
ReactDOM.render(<App/>,document.getElementById("root"));
