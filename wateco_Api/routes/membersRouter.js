import express from "express";
const membersRouter=express.Router();

membersRouter.get('/',(req,res)=>{
    res.send("All members are viewed")
})

membersRouter.get('/:id',(req,res)=>{
    res.send("A  member is viewed")
})

membersRouter.post('/',(req,res)=>{
    res.send("A new member is Added")
})

membersRouter.put('/:id',(req,res)=>{
    res.send("A new member is updated")
})

membersRouter.delete('/',(req,res)=>{
    res.send("A member has been deleted")
})

export default membersRouter;


