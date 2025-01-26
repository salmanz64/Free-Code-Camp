const express = require("express");
let app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
    const absolutePath = __dirname + '/public/index.html'
    
    res.sendFile(absolutePath);
});

app.use("/",express.static(__dirname+'/public'))
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});