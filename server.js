const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const Fabric = require('./models/fabrics');
const port = process.env.PORT || 3003
const methodOverride = require('method-override');
// const Fabrics = require('./models/fabrics');
const fabricData = require('./utilities/fabricData')

//DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static("public"));

//setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //initializing engine

//signature for git route
app.get('/', (req, res) => {
  res.render('Home');
});

//Seed Route
app.get('/api/v1/fabrics/seed', async (req, res) => {
  await Fabric.deleteMany({})
  await Fabric.create(fabricData)
  res.redirect('/api/v1/fabrics')
})

//Index route render all fabrics
app.get('/api/v1/fabrics', (req, res)=>{
  Fabric.find({}, (error, allFabrics)=>{
      res.render('Index', {
          fabrics: allFabrics,
      });
  });
});

//Fabrics Add Page
app.get('/api/v1/fabrics/new', (req, res)=>{
  res.render('New');
});

//Delete Route
app.delete("/api/v1/fabrics/:category/:id", (req, res) => {
  //First arg is ID we want to delet, 2nd arg is callback function
  Fabric.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/api/v1/fabrics");
  });
});

//Put new information in DB
app.put("/api/v1/fabrics/:category/:id", (req, res) => {
  Fabric.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, fabric) => {
      res.redirect(`/api/v1/fabrics/:category/${req.params.id}`);
    }
  );
});

//Create Fabrics POST route
app.post('/api/v1/fabrics/:category', (req, res)=>{
  let name = req.body.name.split("");
  name[0] = name[0].toUpperCase();
  req.body.name = name.join("");

  Fabric.create(req.body, (error, createdFabric)=>{
      res.redirect('/api/v1/fabrics');
  });
});

// Render Edit Page
app.get("/api/v1/fabrics/:category/:id/edit", (req, res) => {
  Fabric.findById(req.params.id, (err, foundFabric) => {
    if (!err) {
      res.render("Edit", {
        fabric: foundFabric,
      });
    } else {
      res.send({
        msg: err.message,
      });
    }
  });
});

// //category route
app.get('/api/v1/fabrics/:category', (req, res)=>{
  Fabric.find({category: req.params.category}, (error, allFabrics)=>{
      res.render('Index', {
          fabrics: allFabrics,
      });
  });
});

//Show route
app.get("/api/v1/fabrics/:category/:id", (req, res) => {
  Fabric.findById(req.params.id, (err, foundFabric) => {
    res.render('Show', {
      fabrics: foundFabric,
    });
  });
});




app.listen(port, () => {
  console.log(`listening on http://localhost:${port} `);
});