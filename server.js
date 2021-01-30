// Dependencies
const express = require('express');

// Set up express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/htmlroutes')(app);
require('./routes/apiroutes')(app);



app.listen(PORT, () => {
    console.log(`App Vibing on PORT ${PORT}`);
})