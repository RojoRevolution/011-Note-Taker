// Dependencies
const express = require('express');
const path = require('path');

// Set up express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(PORT, () => {
    console.log(`App Vibing on PORT ${PORT}`);
})