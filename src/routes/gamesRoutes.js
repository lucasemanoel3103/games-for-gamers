const express = require("express");
const router = express.Router()

router.get("/games", (req, res) => {
    res.json()
})

router.get("/game/:id", (req, res) => {
    if(isNaN()){
        
    }
    
    let id = req.params.id;



})

module.exports = router