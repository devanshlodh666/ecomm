import mongoose from 'mongoose';
const db = ()=>{
    try {
    mongoose.connect(process.env.MONGODB_URI,
        { 
        dbName:'eCommers'
        } 
     ).then(()=>{
        console.log('connect'); 
     })  

    } catch (error) {
        console.log(error);
    }
} 

export {db}