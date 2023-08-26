const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const {PORT} = process.env;
const app = express();

/** iMPORT ROUTER */
const customersRoute = require('./routers/customer')

// CREATE SERVER
app.use(express.json())

app.use(customersRoute)
app.listen(PORT, () => console.log('server run at http://localhost:'+PORT))