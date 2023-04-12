const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');

const app=express();

const react=require('./Schemas/array');
app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/project',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');
    }
})


app.post('/',async(req,res)=>{
    const add=new react({
    Name:req.body.Name,
    Address:req.body.Address,
    City:req.body.City,
    Pincode:req.body.Pincode,
    Country:req.body.Country,
    })
    add.save()
    res.json('posted')
})

app.get('/get',async(req,res)=>{
    const get1=await react.find();
    res.json(get1)
})
app.get('/get/:id',async(req,res)=>{
    const getid=await react.findById(req.params.id)
    res.json(getid)
})
app.delete('/get/del/:id',async(req,res)=>{
    await react.findByIdAndDelete(req.params.id)
    res.json('data deleted')
})
app.put('/get/up/:id',async(req,res)=>{
    const up1=await react.findByIdAndUpdate(req.params.id)
   up1.Name=req.body.Name,
    up1.Address=req.body.Address,
    up1.City=req.body.City,
    up1.Pincode=req.body.Pincode,
   up1.Country=req.body.Country;
    up1.save();
    res.json(up1)
})


let port=9000;
app.listen(port,function(err){
    if(err) console.log('error');
    console.log('server listening on '+port);
})