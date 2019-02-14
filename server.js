// Dependencies
const express = require('express');
const path = require('path');

// Create server object
const app = express();

// Middleware and parsing


// Routing
require('app/routing/apiRoutes.js')(app);
require('app/routing/htmlRoutes.js')(app);


// Listen 
const PORT = 8080;
app.listen(PORT, () => {
    console.log('listening on port ', PORT);
});