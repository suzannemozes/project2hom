const express = require('express');
require('dotenv').config();
const app = express();
// const Fabric = require('/api/v1//models/Fabrics.js');
const port = process.env.PORT || 3003

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/api/v1/', (req, res) => {
  res.send('Welcome to House of Mozes');
});

// //Index route render all fabrics
// app.get('/api/vi/fabrics', (req, res)=>{
//   Fabric.find({}, (error, allFabrics)=>{
//       res.render('Index', {
//           fabrics: allFabrics
//       });
//   });
// });

// app.get('/api/vi/fabrics', (req, res)=>{
//   res.send('Index');
// });

// //render Index
// app.get('/api/vi/fabrics', (req, res)=>{
//   res.render('Index');
// });


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

// app.get('/api/v1/fabrics/new', (req, res)=>{
//   res.render('New');
// });





app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});