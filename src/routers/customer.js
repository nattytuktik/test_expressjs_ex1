const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        data: "Hello world customer Router",
        status: true
    })
});

module.exports =  router;