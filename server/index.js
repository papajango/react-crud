const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();
const db = monk(process.env.MONGO_URI || 'localhost/twitter');
const products = db.get('products');

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
    products
        .find()
        .then(products => {
            res.json(products);
        });
});

app.get('/products/:id', (req, res) => {
    products
        .find(req.params.id)
        .then(product => {
            res.json(product);
        });
});

app.post('/products', (req, res) => {
    const product = {
        title: req.body.title.toString(),
        description: req.body.description.toString(),
        price: req.body.price.toString(),
        quantity: req.body.quantity.toString(),
        image: req.body.image.toString()
    };
    products
        .insert(product)
        .then(createdProduct => {
            res.json(createdProduct);
        });
});

app.listen(5000, () => {
    console.log('Listening on 5000');
});