const mongoose = require('mongoose')

const fabricsSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  color:  { type: String, required: true },
  color2:  { type: String, required: false },
  color3:  { type: String, required: false },
  description: { type: String, required: true },
  category
  image:  { type: Image, required: true },
  color:  { type: String, required: true },
  washed: Boolean
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
    washed:true
    img:
    isbn: "tk"
    tags: 