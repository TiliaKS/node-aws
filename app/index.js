const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.APP_PORT ?? 3000


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World with NODE JS');
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.listen(PORT, () => {
//   console.log(`Server is running http://localhost:${PORT}`)
// })
