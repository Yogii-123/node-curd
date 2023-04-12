const mongoose=require('mongoose')
const arrayname1=new mongoose.Schema({
    // Name:{
    //     type:String,
    //     enum:['Thomas Hardy','Maria Anders','Fran Wilson','Dominique perrier','Martin Blank'],
    //     required:true
    // },
    // Address:{
    //     type:String,
    //     required:true
    // },
    // City:{
    //     type:String,
    //     enum:['Portland','Berlin','Madrid','Paris','Turin'],
    //     required:true
    // },
    // Pincode:{
    //     type:Number,
    //     required:true
    // },
    // Country:{
    //     type:String,
    //     enum:['USA','Germany','Spain','France','Italy'],
    //     required:true
    // },




    Name:{
        type:String,
        // enum:['Thomas Hardy','Maria Anders','Fran Wilson','Dominique perrier','Martin Blank'],
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        // enum:['Portland','Berlin','Madrid','Paris','Turin'],
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    },
    Country:{
        type:String,
        // enum:['USA','Germany','Spain','France','Italy'],
        required:true
    },


})
module.exports=mongoose.model('react',arrayname1)
