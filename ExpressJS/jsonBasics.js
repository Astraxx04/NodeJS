const express = require('express');
const {products} = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1><a href = "/api/products">Products</a>`);
});

// app.get("/api/products", (req, res) => {
//     const newProduct = products.map((product) => {
//         const { id, name, image } = product;
//         return { id, name, image };
//     });
//     res.json(newProduct);
// });

app.get("/api/products/:productID", (req, res) => {
    console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID) );
    if (!singleProduct) {
        return res.status(404).send(`No id named ${productID}`);
    }
    return res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    res.send("Just checking multiple params")
});

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        });
    }

    if (limit) {
        return sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send("No products match your search");
        return res.status(200).json({ success: true, data: []});
    }

    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});