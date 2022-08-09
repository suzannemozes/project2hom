const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to House of Mozes');
});

app.post('/fruits/', (req, res)=>{
  res.send('received');
});

// app.get('/fruits/new', (req, res)=>{
//   res.render('New');
// });


app.listen(3000, () => {
  console.log(`listening on http://localhost:${port} `);
});