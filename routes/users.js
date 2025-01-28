const express = require("express");
const path = require("path");
const router = express.Router();


router.get("/", (req,res)=>{
    res.sendFile("ALL USERS");
});

router.get("/:userId",(req,res)=>{
    res.sendFile(req.params);
});

router.post("/",(req,res)=>{
    res.send(req.body);
});

router.put("/:userId",(req,res)=>{
    res.send("put request in users");
});

router.delete("/:userId",(req,res)=>{
    res.send("delete request in users");
});

module.exports = router;