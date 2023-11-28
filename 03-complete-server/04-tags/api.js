const Products = require('../../04-persistance/01/products')

module.exports = {
  listProducts
}

async function listProducts (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const {offset = 0, limit = 25, tag} = req.query

  try {
    res.json(await Products.list({
      offset: Number(offset),
      limit: Number(limit),
      tag
    }))
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

async function createProduct (req, res, next) {
  const product = await Products.create(req.body)
  res.json(product)
}

