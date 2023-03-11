const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hi");
});

router.post("/", async(req,res)=>{
    const chapter = req.body;
    await Chapters.create(chapter);
    res.json(chapter);
});

module.exports = router;