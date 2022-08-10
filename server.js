const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const Fabric = require('./models/fabrics');
const port = process.env.PORT || 3003
const methodOverride = require('method-override');
// const fabricData = require('./api/v1/utilities/fabricData')

//DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//midleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

//setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //initializing engine

//signature for git route
app.get('/api/v1/', (req, res) => {
  console.log(` welcome page `);
  res.send('Welcome to House of Mozes');
  
});

//Index route render all fabrics
app.get('/api/v1/fabrics', (req, res)=>{
  Fabric.find({}, (error, allFabrics)=>{
      res.render('Index', {
          fabrics: allFabrics
      });
  });
});

// //Index page
// app.get('/api/v1/fabrics', (req, res) => {
//   console.log(` fabrics index`);
//   res.send('House of Mozes');
// });

// app.get('/api/v1/fabrics/:id', function(req, res) {
//   Fabric.findById(req.params.id, (err, foundFabrics) => {
//     res.send(foundFabrics)
//     console.log(req.body)
    
//   })
// })

// //Edit Page
// app.get('/api/v1/fabrics/:id/edit', (req, res) => {
//   Fabric.findById(req.params.id, (error, foundFabric) => {
//     if(!error) {
//       res.render('Edit', {
//         fabric: foundFabric
//       })
//     } else {
//       res.send({
//         message: error.message
//       })
//     }
//   })
// })

//render Index
// app.get('/api/v1/fabrics', (req, res)=>{
//   res.render('Index');
// });

//create route create data in MongoDB
app.post('/api/v1/fabrics/', (req, res)=>{
  // if(req.body.upholstery === 'on'){ //if checked, req.body.readyToEat is set to 'on'
  //     req.body.upholstery = true;
  // } else { //if not checked, req.body.readyToEat is undefined
  //     req.body.upholstery = false;
  // }
  Fabric.create(req.body, (error, createdFabric)=>{
      res.redirect('/api/v1/fabrics');
  });
});

app.get('/api/v1/fabrics/new', (req, res)=>{
  res.render('New');
});

// // Update route
// app.put('/api/v1/fabrics/:id', (req, res) => {
//   Fabric.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//   }, (error, fabric) => {
//       res.redirect(`/api/v1/fabrics/${req.params.id}`)
//   })
// })


app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});