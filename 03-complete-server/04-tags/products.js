
const cuid = require('cuid');

const db = require('./db');

const Product = db.model('Product', {
  _id: {type: String, default: cuid},
  description: String,
  imgThumb: String,
  img: String,
  link: String,
  userId: String,
  userName: String,
  userLink: String,
  tags: {type: [String], index: true}
})

async function create (fields) {
  const product = await new Product(fields).save()
  return product
}

module.exports = {
  get,
  list,
  create
}

async function list (opts = {}) {
  const { offset = 0, limit = 25, tag } = opts
  const data = await fs.readFile(productsFile)
  return JSON.parse(data)
    .filter((p, i) => !tag || p.tags.indexOf(tag) >= 0)
    .slice(offset, offset + limit)
}

async function get (_id) {
  const product = await Product.findById(_id)
  return product
}

