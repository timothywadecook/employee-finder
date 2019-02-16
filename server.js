// Dependencies
// ===================================================================
const express = require('express');
const bodyParser = require('body-parser');

// Create server object
// ===================================================================
const app = express();

// Middleware and parsing
// ===================================================================
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routing
// ===================================================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Listen 
// ===================================================================
const PORT = 8080;
app.listen(PORT, () => {
    console.log('listening on port ', PORT);
});