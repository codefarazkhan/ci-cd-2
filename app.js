const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    console.log('Received a request at /');
    console.log('Received a request at /2');
    console.log('Received a request at /3');
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
