const cuid = require('cuid')
const { isEmail } = require('validator')

const db = require('../db')

const Order = db.model('Order', {
  _id: { type: String, default: cuid },
  buyerEmail: emailSchema({ required: true }),
  products: [
    {
      type: String,
      ref: 'Product',
      index: true,
      required: true
    }
  ],
  status: {
    type: String,
    index: true,
    default: 'CREATED',
    enum: ['CREATED', 'PENDING', 'COMPLETED']
  }
})

async function get (_id) {
  const order = await Order.findById(_id)
    .populate('products')
    .exec()
  return order
}

