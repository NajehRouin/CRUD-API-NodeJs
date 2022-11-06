const express= require('express');
const mongoose=require('mongoose');
const apifrient=require('./routes/friend.routes')
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apifrient);
mongoose.connect("mongodb://localhost:27017/friendDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("DB connscted .."))
.catch((err)=>console.error(err));



const port= process.env.Port|| 3000;
app.listen(port,()=>{
    console.log('SERVER RUNNING ON PORT ${port}',port);
});