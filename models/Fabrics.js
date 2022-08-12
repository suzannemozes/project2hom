const mongoose = require('mongoose')

const fabricsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // length: { type: String, required: false },
  // width:  { type: String, required: false },
  // material: { type: String, required: false },
  // fabriccontent1: { type: String, required: false },
  // fabriccontent1a: { type: String, required: false },
  // fabriccontent2: { type: String, required: false },
  // fabriccontent2a: { type: String, required: false },
  // fabriccontent3: { type: String, required: false },
  // fabriccontent3a: { type: String, required: true },
  // pattern: { type: String, required: false },
  // pattern2: { type: String, required: false },
  // fabricdesigner: { type: String, required: false },
  // fabriccollection: { type: String, required: false },
  color: { type: String, required: false },
  // color2: { type: String, required: false },
  // color3: { type: String, required: false },
  // description: { type: String, required: false },
  category: { type: String, required: false },
  // category2: { type: String, required: false },
  // category3: { type: String, required: false },
  image: { type: String, required: false },
  // image2: { type: String, required: false },
  // isbn: { type: String, required: false },
  stock: { type: String, required: false },
  // tag1: { type: String, required: false },
  // tag2: { type: String, required: false },
  // tag3: { type: String, required: false },
  price: { type: String, required: false },
  // garment: Boolean,
  // home: Boolean,
  // pillow: Boolean,
  // upholstery: Boolean,
  // remnant: Boolean,
  // organic: Boolean

});

const Fabrics = mongoose.model('Fabric', fabricsSchema);

module.exports = fabrics;
