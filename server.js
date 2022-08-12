const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const Fabric = require('./models/fabrics');
const port = process.env.PORT || 3003
const methodOverride = require('method-override');
// const Fabrics = require('./models/fabrics');
// const fabricData = require('./api/v1/utilities/fabricData')

//DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

//setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //initializing engine

//signature for git route
app.get('/api/v1/', (req, res) => {
  res.render('Home');
});

  
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
app.delete("/api/v1/fabrics/:id", (req, res) => {
  console.log('in delete function')
  //First arg is ID we want to delet, 2nd arg is callback function
  Fabric.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/api/v1/fabrics");
  });
});

//Put new information in DB
app.put("/api/v1/fabrics/:id", (req, res) => {
  Fabric.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, fabric) => {
      res.redirect(`/fabrics/${req.params.id}`);
    }
  );
});

//Create Fabrics POST route
app.post('/api/v1/fabrics/', (req, res)=>{
  let name = req.body.name.split("");
  name[0] = name[0].toUpperCase();
  req.body.name = name.join("");

  Fabric.create(req.body, (error, createdFabric)=>{
      res.redirect('/api/v1/fabrics');
  });
});

// Render Edit Page
app.get("/api/v1/fabrics/:id/edit", (req, res) => {
  console.log('in edit function')
  Fabric.findById(req.params.id, (err, foundFabric) => {
    if (!err) {
      console.log('in edit IF function')
      res.render("Edit", {
        fabric: foundFabric,
      });
    } else {
      console.log('in edit ELSE function')
      res.send({
        msg: err.message,
      });
    }
  });
});

//Show route
app.get("/api/v1/fabrics/:id", (req, res) => {

  Fabric.findById(req.params.id, (err, foundFabric) => {
    console.log("in find by id")
    console.log(foundFabric)
    res.render('Show', {
      fabrics: foundFabric,
    });
  });
});

app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});