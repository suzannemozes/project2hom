const mongoose = require('mongoose')

const fabricsSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  length:  { type: String, required: false },
  width:  { type: String, required: false },
  color:  { type: String, required: true },
  color2:  { type: String, required: false },
  color3:  { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: true },
  category2:  { type: String, required: false },
  category3:  { type: String, required: false },
  image:  { type: Image, required: true },
  image2:  { type: Image, required: false },
  isbn:  { type: String, required: false },
  stock:  { type: String, required: true },
  tag1:  { type: String, required: false },
  tag2:  { type: String, required: false },
  tag3:  { type: String, required: false },
  price:  { type: String, required: true },

});

const Fabrics = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;

name:'linen',
    colors:'pink'
    amount: '10'
    stock: '5'
    description: 'tk'
    category: '' //required
    subcategory: '' // not required

    img:
    isbn: "tk"
    tags: 