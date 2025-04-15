const express=require('express');
const router=express.Router();
const Note=require('../model/Note');


router.get('/',async(req,res)=>{
       const savedNotes= await Note.find();
       res.json(savedNotes);
});

router.post('/',async(req,res)=>{
    const NewNote=new Note(req.body);
    const saved=await NewNote.save();
    res.json(saved);
})

router.delete('/:id',async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:"successfully deleted"});
})

module.exports=router;