const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api-02-without-try-catch')
const middleware = require('./middleware')

const port = process.env.PORT || 1337
const app = express()

app.use(middleware.cors);
app.use(bodyParser.json());

app.get('/products', api.listProducts);
app.get('/products/:id', api.getProduct);

app.use(middleware.handleError);
app.use(middleware.notFound);

app.post('/products', api.createProduct);
app.put('/products/:id', api.editProduct);
app.delete('/products/:id', api.deleteProduct);

app.listen(port, () => console.log(`Server listening on port ${port}`))