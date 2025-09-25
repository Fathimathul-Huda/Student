const express=require("express")
const route=express.Router()
const Student=require("../models/student")
route.post("/",async(req,res)=>{
    try {
        const student=new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({error:error.message })
    }
});

route.get("/view",async(req,res)=>{
    try {
         const student=await Student.find();
         res.status(200).json(student)
    } catch (error) {
         res.status(500).json({ error:error.message})
         }
    });

    route.put("/:id",async(req,res)=>{
            try{
                const {name,age,course}=req.body;
                const updatedstudent=await Student.findByIdAndUpdate(req.params.id,{name,age,course},{new:true});
                if(!updatedstudent)
                    return res.status(404).json({message:" student not found"});
                res.json(updatedstudent);
            } catch (error){
                res.status(400).json({error:error.message})
    
            }
        });
        route.delete("/:id",async(req,res)=>{
            try {
                const deletedstudent=await Student.findByIdAndDelete(req.params.id);
                res.json(deletedstudent);
               
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        });
        module.exports=route;