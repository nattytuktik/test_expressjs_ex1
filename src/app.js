const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const {PORT} = process.env;
const app = express();

/** iMPORT ROUTER */
const customersRoute = require('./routers/customer')

// CREATE SERVER
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/about', (req, res) => {
    res.json({
        firstName: "natee",
        lastName: "chaichana",
        age: 21,
        code_student: "64522202042"
    })
})

app.get('/login', (req, res) => {
    res.send('Login')
})

app.use('customers',customersRoute)

// on port
app.listen(PORT, () => console.log('server run at http://localhost:'+PORT))