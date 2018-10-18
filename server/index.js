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
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        image: req.body.image.toString()
    };
    products
        .insert(product)
        .then(createdProduct => {
            res.json(createdProduct);
        });
});

app.put('/products/:id', (req, res) => {
    const product = {
        _id: req.body._id.toString(),
        title: req.body.title.toString(),
        description: req.body.description.toString(),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        image: req.body.image.toString()
    };
    products
        .update(req.params.id, product)
        .then(updatedProduct => {
            res.json(updatedProduct);
        });
});

app.delete('/products/:id', (req, res) => {
    products
        .remove(req.params.id)
        .then(removedProduct => {
            res.json(removedProduct);
        });
});

app.listen(5000, () => {
    console.log('Listening on 5000');
});