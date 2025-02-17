const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

app.get("/", (req, res) => {
  res.send("Hello, Express");
});
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/api/products", async (req, res) => {
  try {
    const listofproducts = await Product.find({});
    res.status(200).json(listofproducts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.json({ message: "not found " });
    }

    const updatedProduct = await Product.findById(id);
    res.json(updatedProduct);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.json({ message: "not found " });
    }

    
    res.status(200).json({message:"message deleted Succesfully"});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  
});

mongoose
  .connect(
    "mongodb+srv://salmannoushad003:IDPiPAPc2GFTulEl@backenddb.y9vzm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("mangoose connected"));
