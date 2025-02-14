const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect("mongodb+srv://salmannoushad003:IDPiPAPc2GFTulEl@backenddb.y9vzm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb").then(()=>console.log("mangoose connected"))