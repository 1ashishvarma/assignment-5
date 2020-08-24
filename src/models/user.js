const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const express=require('express');


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type: String,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    },
    purchaseHistory:{
        type:String,
        descriprion:String,
        createdAt:Date(),
        Price:Number,
        paymentStatus:{
            type:Boolean,
            default:false
        }
    }
})

userSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
});
userSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}
module.exports=mongoose.model('User',userSchema);