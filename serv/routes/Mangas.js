const express = require('express');
const router = express.Router();
const { Mangas, Chapters } = require("../models");

router.get("/", async(req,res)=>{
    const m = await Mangas.findAll({include: Chapters});
    res.json(m);
});

// get mangas by id
router.get("/byId/:id", async(req,res)=>{
    const m = await Mangas.findByPk(req.params.id, {include: Chapters});
    res.json(m);
});


router.post("/", async(req,res)=>{
    const manga = req.body;
    await Mangas.create(manga);
    res.json(manga);
});

router.delete("/byId/:id",async(req,res)=>{
    const id = req.params;
    const mangaToDelete = await Mangas.findByPk(id);
    await mangaToDelete.destroy();
    res.json("ok");
})

module.exports = router;