const mongoose = require('mongoose')

const fabricsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  length: { type: String, required: false },
  width:  { type: String, required: false },
  material: { type: String, required: true },
  fabriccontent1: { type: String, required: true },
  fabriccontent1a: { type: String, required: true },
  fabriccontent2: { type: String, required: true },
  fabriccontent2a: { type: String, required: true },
  fabriccontent3: { type: String, required: true },
  fabriccontent3a: { type: String, required: true },
  pattern: { type: String, required: true },
  pattern2: { type: String, required: false },
  fabricdesigner: { type: String, required: false },
  fabriccollection: { type: String, required: false },
  color: { type: String, required: true },
  color2: { type: String, required: false },
  color3: { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: true },
  category2: { type: String, required: false },
  category3: { type: String, required: false },
  image: { type: Image, required: true },
  image2: { type: Image, required: false },
  isbn: { type: String, required: false },
  stock: { type: String, required: true },
  tag1: { type: String, required: false },
  tag2: { type: String, required: false },
  tag3: { type: String, required: false },
  price: { type: String, required: true },
  garment: Boolean,
  home: Boolean,
  pillow: Boolean,
  upholstery: Boolean,
  remnant: Boolean,
  organic: Boolean

});

const Fabrics = mongoose.model('Fabric', fabricsSchema);

module.exports = Fabric;
