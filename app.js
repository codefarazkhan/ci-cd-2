const express = require('express');
const app = express();
const port = 3000;
var test = 'test';

// Define a route
app.get('/', (req, res) => {
    // Log the request to the consol
          console.log('Received a request at /');
    console.log('Received a request at /2');
    console.log('Received a request at /3');
    console.log('Received a request at /4');
    console.log('Received a request at /5');
    console.log('Received a request at /6ss');
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
