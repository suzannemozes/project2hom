const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
// const Fabric = require('/api/v1/models/Fabrics');
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
app.get('/api/vi/fabrics', (req, res)=>{
  Fabric.find({}, (error, allFabrics)=>{
      res.render('Index', {
          fabrics: allFabrics
      });
  });
});

//Index page
app.get('/api/v1/fabrics', (req, res) => {
  // console.log(` fabrics index`);
  res.send('House of Mozes');
});
  

//render Index
app.get('/api/vi/fabrics', (req, res)=>{
  res.render('Index');
});


// //create route create data in MongoDB
// app.post('/api/vi/fabrics/', (req, res)=>{
//   if(req.body.upholstery === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//       req.body.upholstery = true;
//   } else { //if not checked, req.body.readyToEat is undefined
//       req.body.upholstery = false;
//   }
//   Fabric.create(req.body, (error, createdFabric)=>{
//       res.redirect('/api/vi/fabrics');
//   });
// });

app.get('/api/v1/fabrics/new', (req, res)=>{
  res.render('New');
});



app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});