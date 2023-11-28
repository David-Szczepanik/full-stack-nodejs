

const Product = db.model('Product', {
  _id: { type: String, default: cuid },
  description: { type: String, required: true },
  imgThumb: { type: String, required: true },
  img: { type: String, required: true },
  link: String,
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userLink: String,
  tags: { type: [String], index: true }
})