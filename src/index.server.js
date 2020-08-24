const express=require('express');
const env=require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


//Routes
const userRoutes=require('./routes/user');

//calling env variable or can say const
env.config();

//mongo DB Connection
mongoose.connect(
    'mongodb://localhost:27017/assignment', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    }
    ).then(()=>{
        console.log("Database Connected");
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    userRoutes.use(bodyParser.json())
    app.use('/api',userRoutes);
    
//app.use(express.json());
// app.use(bodyParser());
// app.use('/api',userRoutes);

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:"hello from server end"
//     });
// });
// app.post('/data',(req,res)=>{
//     res.status(200).json({
//         message:req.body
//     });
// });

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running at port 3000");
});