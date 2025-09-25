const mongo=require("mongoose")
const userScheme=new mongo.Schema({
    name:{ type:String,required:true },
    age:{type:Number},
    course:{type:String,required:true}
})
module.exports=mongo.model("student",userScheme);