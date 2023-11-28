const Products = require('./products')
const autoCatch = require('./auto-catch')

// module.exports ={
//   getProduct,
//   listProducts,
// };

// module.exports = autoCatch({
//   getProduct,
//   listProducts,
// });

module.exports = {
  getProduct: autoCatch(getProduct),
  listProducts: autoCatch(listProducts),
};


async function getProduct(req, res, next) {
  const {id} = req.params;

  const product = await Products.get(id);
  if (!product) return next();

  res.json(product);

}
async function listProducts(req, res) {
  const { offset = 0, limit = 25, tag } = req.query;

  const products = await Products.list({
    offset: Number(offset),
    limit: Number(limit),
    tag,
  });
  res.json(products);

}


