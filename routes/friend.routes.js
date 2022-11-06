const { json } = require('express');
const express= require('express');
const   mongoose = require('mongoose')
const router=express.Router();

const  Friend=require('../Models/friends');

router.post("/friends/add",async(req,res)=>{
    const n=req.body.name
    console.log("name",n)
    try{
        const friend = new Friend({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            bestLine:req.body.bestLine,
            age:req.body.age,
            skills:req.body.skills,
        
        });
        var name=req.body.name
  console.log("name",name)
        const savedFreind=await friend.save();
        res.send(savedFreind);

    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get('/friends',async(req,res)=>{
    try{
        const friends=await Friend.find();
        res.send(friends);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get('/friends/:nameFriend',async(req,res)=>{
    try{
        const namef=req.params.nameFriend;
        const foundFriends=await Friend.findOne({name:namef})
        res.send(foundFriends);
    }
    catch(err){
        res.status(500).json(err)
    }
})





router.put('/friends/update/:nameFriend', (req, res) => {
    var fridsName = req.params.nameFriend;
    var friend = req.body;
   
   // console.log("one"+one);
    Friend.findOneAndUpdate({
        name: req.params.nameFriend,
      
    },  req.body, function (err, one) {
        if (err) {
            res.send({ err: err });
        }
        else{
        res.status(200).json({
         
            data: {

                
                message: "update successfuly",
                frind:req.body
                
            }
        });
    }
    });

})

router.delete('/friend/delete/:friendName',async(req,res)=>{
    try{
        const fName=req.params.friendName;
        await Friend.findOneAndDelete({name:fName});
        res.status(200).json("friend deleted successfully");
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;
