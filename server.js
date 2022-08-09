const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to House of Mozes');
});

app.post('/fabrics/', (req, res)=>{
  res.send('received');
});

app.get('/fabrics/new', (req, res)=>{
  res.render('New');
});


app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});