const fs = require('fs').promises
const path = require('path')
const productsFile = path.join(__dirname, '../products.json')

const cuid = require('cuid');
const db = require('./db');

module.exports = {
  list,
  get,
  create
};

async function list (opts = {}) {
  const { offset = 0, limit = 25, tag } = opts
  const data = await fs.readFile(productsFile)
  return JSON.parse(data)
    .filter((p, i) => !tag || p.tags.indexOf(tag) >= 0)
    .slice(offset, offset + limit)
}

async function get(id) {
  const data = await fs.readFile(productsFile)
  return JSON.parse(data).find(p => id === p.id)
}




const Product = db.model('Product', {
  _id: { type: String, default: cuid },
  description: String, // description: {type: String}
  imgThumb: String,
  img: String,
  link: String,
  userId: String,
  userName: String,
  userLink: String,
  tags: { type: [String], index: true }
})

async function create (fields) {
  const product = await new Product(fields).save()
  return product
}
