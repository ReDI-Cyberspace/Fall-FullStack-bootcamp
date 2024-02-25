const express = require("express");
const router = express.Router();
const {getConnectedClient} = require("./database")
const {ObjectId} = require ("mongodb")

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("productsdb").collection("products");
    return collection;
}

//Get /products
router.get("/products",async (req,res)=>{
    const collection =getCollection();
    const products = await collection.find({}).toArray();

    res.status(200).json(products);
})

// Post /products
router.post("/products", async (req, res) => {
    const collection = getCollection();
    let { product } = req.body;

    if (!product) {
        return res.status(400).json({ mssg: "error no product found" });
    }

   
    const newProduct = { ...product, _id: new ObjectId() };

    const result = await collection.insertOne(newProduct);

    
    if (result.insertedId) {
        res.status(201).json({ product: newProduct, _id: result.insertedId });
    } else {
        res.status(500).json({ mssg: "error inserting product" });
    }
});

//Delete /products/:id
router.delete("/products/:id",async (req,res)=>{
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedProduct = await collection.deleteOne({_id});


    res.status(200).json(deletedProduct);
})

// Put /products/:id
router.put("/products/:id",async (req,res)=>{
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const {status} = req.body;

    if(typeof status !== "boolean"){
        return res.status(400).json({mssg:"invalid status"})
    }

    const updatedProduct = await collection.updateOne({_id},{$set: {status:!status}})


    res.status(200).json(updatedProduct);
})



module.exports = router;