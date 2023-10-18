const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


const port = process.env.PORT || 5001



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


