const express=require('express');
const router=express.Router();
const User= require('../models/user');

router.post('/signin',(res,req)=>{


});

router.post('/singup',(res,req)=>{
User.findOne({Email:req.body.Email})
.exec((error,user)=>{
    if(user) return res.status(400).json({
        message:'Email already exits'
    });

    const {name,Email,password}=req.body;
    const _user=new User({name,Email,password});

    _user.save((error,data)=>{
        if(error) {
            return res.status(400).json({
            Message:'Something went wrong'
        });
    }
    if(data){
        return res.status(200).json({
            user:data
        })
    }
    })
})
});

module.exports=router;