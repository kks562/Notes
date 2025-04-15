const mongoose=require('mongoose');

const NoteSchema=new mongoose.Schema({
    title:String,
    Content:String
});

module.exports=mongoose.model("Note",NoteSchema);