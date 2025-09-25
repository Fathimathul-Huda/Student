const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const port=2000;
app.use(express.json())
mongoose.connect(process.env.mongourl)
.then(()=>{
    console.log("db connected succesfully")
})
.catch((err)=>{
    console.log("db failed:",err)

})

const userdot=require("./Routes/studentroutes")
app.use("/",userdot)

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})