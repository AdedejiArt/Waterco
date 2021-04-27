import express from "express"
import router from "./routes/index.js";
const App=express();



const port=5000;

App.use(router)


App.get('/',(req,res)=>{
    res.send("App is working")
})

App.listen(port,()=>{
    console.log(`App is running on ${port}`)
})