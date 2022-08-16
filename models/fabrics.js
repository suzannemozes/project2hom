const mongoose = require('mongoose')

const fabricsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  length: { type: String, required: false },
  width:  { type: String, required: false },
  material: { type: String, required: false },
  designer: { type: String, required: false },
  color: { type: String, required: false },
  category: { type: String, required: false },
  category2: { type: String, required: false },
  image: { type: String, required: false },
  image2: { type: String, required: false },
  stock: { type: String, required: false },
  price: { type: String, required: false },
  alt: { type: String, required: false },
});

const fabrics = mongoose.model('Fabric', fabricsSchema);

module.exports = fabrics;
